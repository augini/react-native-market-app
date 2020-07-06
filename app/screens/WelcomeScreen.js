import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import GlobalStyles, { images, colors, fonts } from "../styles/GlobalStyles";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={images.background}
      style={styles.backgroundImage}
      blurRadius={2}
    >
      <View style={styles.logoContainer}>
        <Image source={images.redLogo} style={styles.logo} />
        <Text style={styles.logoText}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          backgroundColor={colors.primary}
          text="Login"
          onPress={() => {
            navigation.navigate(routes.Login);
          }}
        ></AppButton>
        <AppButton
          backgroundColor={colors.secondary}
          text="Register"
          onPress={() => {
            navigation.navigate(routes.Register);
          }}
        ></AppButton>
      </View>
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
    top: 200,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    top: 20,
    fontSize: fonts.primaryFontSize,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "column",
    padding: 20,
  },
});
