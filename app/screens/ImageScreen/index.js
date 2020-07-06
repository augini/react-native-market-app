import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Screen from "../Screen";
import ImageInput from "../../components/ImageInput";
import ImageInputList from "../../components/ImageInputList";

const ImageScreen = () => {
  const [imageUris, setImageUris] = useState([]);

  const onAddImage = (uri) => {
    setImageUris([...imageUris, uri]);
    console.log(imageUris);
  };

  const onRemoveImage = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };
  return (
    <Screen>
      <View>
        <ImageInputList
          imageUris={imageUris}
          onAddImage={onAddImage}
          onRemoveImage={onRemoveImage}
        />
      </View>
    </Screen>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
