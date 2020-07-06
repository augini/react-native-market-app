import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ItemListingScreen from "../../screens/ItemListingScreen";
import ItemListingStack from "../ItemListingStack";
import AccountStack from "../AccountStack";
import NewListingButton from "./NewListingButton";
import { colors } from "../../styles/GlobalStyles";
import routes from "../routes";
import { color } from "react-native-reanimated";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
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
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
