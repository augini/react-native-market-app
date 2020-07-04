import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../styles/GlobalStyles";

const AppButton = ({ text, onPress, backgroundColor = colors.primary }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor }}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginVertical: 10,
    backgroundColor: colors.danger,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.fontFamily,
    fontSize: fonts.secondaryFontSize,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
