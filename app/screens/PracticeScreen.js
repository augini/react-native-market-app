import React from "react";
import { ScrollView, Text, StyleSheet, StatusBar } from "react-native";
import Card from "../components/Card";
import { images } from "../styles/GlobalStyles";
const PracticeScreen = () => {
  return (
    <ScrollView>
      <Card
        image={images.jacket}
        title="Red jacket for sale!"
        subtitle="100"
      ></Card>
      <Card
        image={images.chair}
        title="Red jacket for sale!"
        subtitle="100"
      ></Card>
      <Card
        image={images.jacket}
        title="Red jacket for sale!"
        subtitle="100"
      ></Card>
      <Card
        image={images.jacket}
        title="Red jacket for sale!"
        subtitle="100"
      ></Card>
      <Card
        image={images.jacket}
        title="Red jacket for sale!"
        subtitle="100"
      ></Card>
      <StatusBar hidden={false} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    width: 50,
    height: 50,
    borderWidth: 50,
    borderColor: "yellow",
    shadowColor: "grey",
    shadowOffset: { width: 40, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 40,
  },
});

export default PracticeScreen;
