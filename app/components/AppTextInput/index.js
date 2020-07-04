import React from "react";
import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import { colors } from "../../styles/GlobalStyles";
import { MaterialIcons } from "@expo/vector-icons";

const AppTextInput = ({ icon, fieldWidth, ...otherProps }) => {
  return (
    <View
      style={{ ...styles.container, width: fieldWidth ? fieldWidth : "100%" }}
    >
      {icon && <MaterialIcons name={icon} size={24} color={colors.medium} />}
      <TextInput
        style={styles.text}
        {...otherProps}
        placeholderTextColor={colors.medium}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.light,
    alignItems: "center",
    borderRadius: 30,
    padding: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginLeft: 10,
    color: colors.dark,
  },
});
