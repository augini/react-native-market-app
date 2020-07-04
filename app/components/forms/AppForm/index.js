import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";

const AppForm = ({ children, initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => {
        return <>{children}</>;
      }}
    </Formik>
  );
};

export default AppForm;

const styles = StyleSheet.create({});
