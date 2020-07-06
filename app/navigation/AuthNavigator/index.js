import * as React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import WelcomeScreen from "../../screens/WelcomeScreen";
import navigationTheme from "../navigationTheme";

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthStack.Navigator initialRouteName="Welcome">
        <AuthStack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
