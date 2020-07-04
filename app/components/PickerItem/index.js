import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "../Icon/index";
import ListItem from "../ListItem/index";

const PickerItem = ({ label, iconName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ backgroundColor: "red", padding: 50 }}>
        <ListItem
          description={label}
          ImageComponent={
            <Icon
              name={iconName}
              size={40}
              backgroundColor="red"
              iconColor="white"
            />
          }
        />
      </View>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({});
