import React, { useState, useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, Button } from "react-native";
import Card from "../components/Card";
import { images } from "../styles/GlobalStyles";
import Screen from "../screens/Screen";
import ItemListingScreen from "./ItemListingScreen";
import { StatusBar } from "expo-status-bar";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";

const PracticeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadListings = async () => {
    //check if it is loading
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    //set the error if server returns error
    if (!response.ok) {
      return setError(true);
    }
    setError(false);

    setItems(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);
  return (
    <Screen>
      {error && (
        <>
          <Text style={{ alignSelf: "center", marginVertical: 10 }}>
            Could not retrieve the listings?
          </Text>
          <AppButton onPress={loadListings} text="Try again"></AppButton>
        </>
      )}
      <ActivityIndicator visible={loading} />
      <ScrollView>
        {items.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(routes.ItemDetails, item);
              }}
              key={item.id}
            >
              <Card
                image={item.images[0].url}
                title={item.title}
                subtitle={item.price}
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
