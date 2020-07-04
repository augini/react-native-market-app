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
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
  image,
  description,
  title,
  subtitle,
  onPress,
  handleRightActions,
  ImageComponent,
  iconName,
}) => {
  return (
    <Swipeable renderRightActions={handleRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          <View>
            {ImageComponent}
            {description && <Text>{description}</Text>}
          </View>

          {image && <Image source={image} style={styles.image} />}
          <View style={styles.contentContainer}>
            {title && (
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            )}
            {subtitle && (
              <Text style={styles.subtitle} numberOfLines={2}>
                {" "}
                {subtitle}{" "}
              </Text>
            )}
          </View>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              size={25}
              color={colors.medium}
            />
          )}
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
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  contentContainer: {
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontWeight: "600",
  },
  subtitle: {
    color: colors.medium,
  },
});
