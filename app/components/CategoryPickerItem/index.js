import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "../Icon";

const CategoryPickerItem = ({ item, label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        backgroundColor={item.backgroundColor}
        name={item.iconName}
        size={80}
      />
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
