import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../styles/GlobalStyles";

const index = ({ title, iconName, iconBackground }) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.icon, backgroundColor: iconBackground }}>
        <MaterialCommunityIcons name={iconName} size={22} color="white" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.white,
  },
  icon: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  title: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "600",
  },
});
