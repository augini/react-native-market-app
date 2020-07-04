import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Modal,
  FlatList,
} from "react-native";
import { colors } from "../../styles/GlobalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PickerItem from "../../components/PickerItem";

const AppPicker = ({ icon, items, placeholder, selectItem, value }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={24}
              color={colors.medium}
            />
          )}
          <Text style={styles.text}>{placeholder}</Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={modalVisible}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableHighlight
            style={{
              backgroundColor: "grey",
              borderRadius: 15,
              marginVertical: 100,
              padding: 10,
            }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text>Hide Modal</Text>
          </TouchableHighlight>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                iconName={item.iconName}
                onPress={() => {
                  selectItem(item.label), setModalVisible(!modalVisible);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.light,
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 10,
    padding: 15,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginLeft: 10,
    color: colors.medium,
    flex: 1,
  },
});
