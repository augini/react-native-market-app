import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../styles/GlobalStyles";

const Seperator = () => {
  return <View style={styles.seperator}></View>;
};

export default Seperator;

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
});
