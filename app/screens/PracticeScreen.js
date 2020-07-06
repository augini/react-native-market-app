import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import { images } from "../styles/GlobalStyles";
import Screen from "../screens/Screen";
import ItemListingScreen from "./ItemListingScreen";
import { StatusBar } from "expo-status-bar";
import routes from "../navigation/routes";

const items = [
  { image: "jacket", title: "Red jacket for sale", subtitle: "500" },
  { image: "chair", title: "Red jacket for sale", subtitle: "200" },
  { image: "jacket", title: "Blue jacket is for sale", subtitle: "300" },
];

const PracticeScreen = ({ navigation }) => {
  return (
    <Screen>
      <ScrollView>
        {items.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(routes.ItemDetails, item);
              }}
              key={item.subtitle}
            >
              <Card
                image={images[item.image]}
                title={item.title}
                subtitle={item.subtitle}
              ></Card>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <StatusBar hidden={false} />
    </Screen>
  );
};

export default PracticeScreen;
