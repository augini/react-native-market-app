import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "../Icon/index";
import ListItem from "../ListItem/index";

const PickerItem = ({ backgroundColor, item, iconName, onPress }) => {
  return (
    <View>
      <ListItem
        title={item.label}
        onPress={onPress}
        ImageComponent={
          <Icon
            name={item.iconName}
            size={40}
            backgroundColor={item.backgroundColor}
            iconColor="white"
          />
        }
      />
    </View>
  );
};

export default PickerItem;

const styles = StyleSheet.create({});
