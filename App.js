import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-community/async-storage";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import PracticeScreen from "./app/screens/PracticeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ItemListingScreen from "./app/screens/ItemListingScreen";
import ImageScreen from "./app/screens/ImageScreen";
import ImageInput from "./app/components/ImageInput";
import AuthNavigator from "./app/navigation/AuthNavigator";
import BottomTabNavigator from "./app/navigation/BottomTabNavigator";

export default function App() {
  // console.log(Dimensions.get("screen"));
  const { landscape } = useDeviceOrientation();

  NetInfo.fetch().then((state) => {
    console.log("Connection type", state);
  });

  const demo = async () => {
    try {
      await AsyncStorage.setItem(
        "person",
        JSON.stringify({ id: 1, name: "Farrukh", email: "augini@inbox.ru" })
      );
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };
  demo();

  return <BottomTabNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
