import React, { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ItemListingScreen from "../../screens/ItemListingScreen";
import ItemListingStack from "../ItemListingStack";
import AccountStack from "../AccountStack";
import NewListingButton from "./NewListingButton";
import { colors } from "../../styles/GlobalStyles";
import routes from "../routes";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  useEffect(() => {
    registerForPushNotifications();
  }, []);
  const registerForPushNotifications = async () => {
    try {
      const permission = Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "gray",
        safeAreaInsets: { bottom: 0 },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={ItemListingStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Listing"
        component={ItemListingScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => {
                navigation.navigate(routes.Listing);
              }}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
