import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import GlobalStyles, { images } from "../styles/GlobalStyles";

const WelcomeScreen = () => {
  return (
    <ImageBackground source={images.background} style={styles.backgroundImage}>
      <View style={styles.logoContainer}>
        <Image source={images.redLogo} style={styles.logo} />
        <Text style={styles.logoText}>Sell what you do not need</Text>
      </View>
      <TouchableOpacity
        style={{ ...styles.button, backgroundColor: "#fc5c65" }}
      >
        <Text
          onPress={() => {
            alert("Good");
          }}
        >
          Click me
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.button, backgroundColor: "#4ECDC4" }}
      >
        <Text
          onPress={() => {
            alert("Good");
          }}
        >
          Click me
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    top: 150,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    top: 20,
  },
  button: {
    width: "100%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
});
