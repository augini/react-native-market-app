import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  console.log(Dimensions.get("screen"));
  const { landscape } = useDeviceOrientation();
  return (
    <View style={styles.container}>
      <View style={{ height: 100, width: 100, backgroundColor: "gold" }}></View>
      <View
        style={{ height: 100, width: 100, backgroundColor: "yellow" }}
      ></View>
      <View
        style={{ height: 100, width: 100, backgroundColor: "green" }}
      ></View>
      <View
        style={{ height: 100, width: 100, backgroundColor: "white" }}
      ></View>
      <View style={{ height: 100, width: 100, backgroundColor: "grey" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "coral",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  example: {
    backgroundColor: "red",
    width: "100%",
    height: "30%",
  },
});
