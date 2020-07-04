import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Screen from "../Screen";
import ImageInput from "../../components/ImageInput";

const ImageScreen = () => {
  const [imageUri, setImageUri] = useState();

  return (
    <Screen>
      <View>
        <ImageInput
          imageUri={imageUri}
          onChangeImage={(uri) => {
            setImageUri(uri);
          }}
        />
      </View>
    </Screen>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
