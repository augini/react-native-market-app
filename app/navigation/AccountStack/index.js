import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../../screens/AccountScreen";
import MessagesScreen from "../../screens/MessagesScreen";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="My messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
}
