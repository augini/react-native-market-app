import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../styles/GlobalStyles";

const index = ({ backgroundColor, text }) => {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor }}>
      <Text
        onPress={() => {
          alert("Good");
        }}
        style={styles.text}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 45,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.fontFamily,
    fontSize: fonts.secondaryFontSize,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
