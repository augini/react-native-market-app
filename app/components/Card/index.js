import React from "react";
import { View, Text, StyleSheet, Image, ImageStore } from "react-native";
import { images, colors, fonts } from "../../styles/GlobalStyles";

const Card = ({ image, title, subtitle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={image} style={styles.cardImage} resizeMode="stretch" />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSubtitle}>${subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  cardContainer: {
    top: 20,
    backgroundColor: "#ffff",
    height: 270,
    width: "90%",
    borderRadius: 20,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    alignItems: "flex-start",
    left: 20,
    top: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: fonts.fontFamily,
    color: colors.black,
  },
  cardSubtitle: {
    fontSize: 16,
    color: colors.secondary,
    fontWeight: "bold",
  },
});
