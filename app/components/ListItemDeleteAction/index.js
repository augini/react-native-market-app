import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors } from "../../styles/GlobalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
    </TouchableOpacity>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
