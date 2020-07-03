import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { images, colors } from "../../styles/GlobalStyles";
import ListItem from "../../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image source={images.jacket} style={styles.image}></Image>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.price}>$100</Text>
      </View>
      <View style={styles.userDetails}>
        <ListItem
          image={images.farrukh}
          title="Farrukh"
          subtitle="5 Listings"
        />
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 10,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
  },
  userDetails: {
    marginVertical: 20,
  },
});
