import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { colors } from "../../styles/GlobalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color="white" size={40} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 40,
    height: 80,
    width: 80,
    bottom: 30,
    borderColor: colors.white,
    borderWidth: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
