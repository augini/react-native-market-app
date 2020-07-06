import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppTextInput from "../../AppTextInput";
import { useFormikContext } from "formik";

const AppFormField = ({ name, fieldWidth, ...otherProps }) => {
  const {
    handleChange,
    handleBlur,
    errors,
    setFieldValue,
    touched,
    values,
  } = useFormikContext();
  return (
    <View>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        fieldWidth={fieldWidth}
        {...otherProps}
      />
      {errors[name] && touched[name] && (
        <Text style={styles.errorText}>{errors[name]}</Text>
      )}
    </View>
  );
};

export default AppFormField;

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontStyle: "italic",
  },
});
