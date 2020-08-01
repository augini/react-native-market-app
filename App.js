import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import jwtDecode from "jwt-decode";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";

import AuthContext from "./app/auth/AuthContext";
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
import authStorage from "./app/auth/storage";

export default function App() {
  //use user and setUser states to be used inside all other components
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  // console.log(Dimensions.get("screen"));

  const { landscape } = useDeviceOrientation();
  NetInfo.fetch().then((state) => {
    console.log("Connection type", state);
  });

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
    );

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

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <BottomTabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
