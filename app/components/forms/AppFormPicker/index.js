import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppPicker from "../../AppPicker";
import { useFormikContext } from "formik";

const AppFormPicker = ({
  items,
  placeholder,
  PickerItemComponent,
  name,
  numberOfColumns = 1,
}) => {
  const { handleSubmit, setFieldValue, values } = useFormikContext();
  return (
    <AppPicker
      placeholder={values[name]}
      items={items}
      PickerItemComponent={PickerItemComponent}
      numberOfColumns={numberOfColumns}
      selectItem={(item) => {
        setFieldValue(name, item);
      }}
    />
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
