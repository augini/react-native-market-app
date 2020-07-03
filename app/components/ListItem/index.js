import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { colors } from "../../styles/GlobalStyles";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({ image, title, subtitle, onPress, handleRightActions }) => {
  return (
    <Swipeable renderRightActions={handleRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}> {title}</Text>
            <Text style={styles.subtitle}> {subtitle} </Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // borderWidth: 1,
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  contentContainer: {
    // borderWidth: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
  },
  subtitle: {
    color: colors.medium,
  },
});
