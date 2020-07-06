import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PracticeScreen from "../../screens/PracticeScreen";
import ListingDetailsScreen from "../../screens/ListingDetailsScreen";

const ItemStack = createStackNavigator();

export default function ItemListingStack() {
  return (
    <ItemStack.Navigator initialRouteName="Welcome">
      <ItemStack.Screen
        name="Practice"
        component={PracticeScreen}
        options={{ headerShown: false }}
      />
      <ItemStack.Screen name="ItemDetails" component={ListingDetailsScreen} />
    </ItemStack.Navigator>
  );
}
