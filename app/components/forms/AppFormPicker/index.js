import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppPicker from "../../AppPicker";
import { useFormikContext } from "formik";

const AppFormPicker = ({ placeholder, items, name }) => {
  const { handleSubmit, setFieldValue, values } = useFormikContext();
  return (
    <AppPicker
      placeholder={values[name]}
      items={items}
      selectItem={(item) => {
        setFieldValue(name, item);
      }}
    />
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
