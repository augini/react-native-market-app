import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../../AppButton";
import { useFormikContext } from "formik";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton text={title} onPress={handleSubmit} />;
};

export default SubmitButton;

const styles = StyleSheet.create({});
