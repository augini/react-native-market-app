import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { images as ProjectImages, colors } from "../../styles/GlobalStyles";
import ListItem from "../../components/ListItem";

const ListingDetailsScreen = ({ route }) => {
  const { images, title, price } = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: images[0].url }}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <View style={styles.userDetails}>
        <ListItem
          image={ProjectImages.farrukh}
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
    paddingHorizontal: 15,
    paddingTop: 15,
    backgroundColor: colors.background,
  },
  image: {
    width: "100%",
    height: 250,
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
    padding: 5,
  },
});
