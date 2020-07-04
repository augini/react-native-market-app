import React from "react";
import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import { colors } from "../../styles/GlobalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={24} color={colors.medium} />
      )}
      <TextInput style={styles.text} {...otherProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.light,
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 10,
    padding: 15,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginLeft: 10,
    color: colors.dark,
  },
});
