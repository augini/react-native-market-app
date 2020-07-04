import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

const Screen = (props) => {
  return <SafeAreaView style={styles.screen}>{props.children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
