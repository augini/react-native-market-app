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

const ListItem = ({
  image,
  title,
  subtitle,
  onPress,
  handleRightActions,
  ImageComponent,
}) => {
  return (
    <Swipeable renderRightActions={handleRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.contentContainer}>
            <Text style={styles.title}> {title}</Text>
            {subtitle && <Text style={styles.subtitle}> {subtitle} </Text>}
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
    padding: 10,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  contentContainer: {
    justifyContent: "center",
    marginLeft: 10,
  },
  title: {
    fontWeight: "600",
  },
  subtitle: {
    color: colors.medium,
  },
});
