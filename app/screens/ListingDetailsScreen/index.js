import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { images, colors } from "../../styles/GlobalStyles";
import ListItem from "../../components/ListItem";

const ListingDetailsScreen = ({ route }) => {
  const { image, title, subtitle } = route.params;
  return (
    <View style={styles.container}>
      <Image source={images[image]} style={styles.image} resizeMode="stretch" />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${subtitle}</Text>
      </View>
      <View style={styles.userDetails}>
        <ListItem
          image={images.farrukh}
          title="Farrukh"
          subtitle="5 Listings"
          iconName="chevron-right"
        />
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    flex: 1,
  },
  detailsContainer: {
    padding: 20,
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
    padding: 5,
  },
});
