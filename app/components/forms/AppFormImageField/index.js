import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import ImageInputList from "../../ImageInputList";

const AppFormImageField = ({ name }) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  const onAddImage = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  const onRemoveImage = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <View>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={onAddImage}
        onRemoveImage={onRemoveImage}
      />
      {errors[name] && touched[name] && (
        <Text style={styles.errorText}>{errors[name]}</Text>
      )}
    </View>
  );
};

export default AppFormImageField;

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontStyle: "italic",
  },
});
