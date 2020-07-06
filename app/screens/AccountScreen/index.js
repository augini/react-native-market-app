import React from "react";
import { StyleSheet, Text, View, FlatList, ImageStore } from "react-native";
import { colors, images } from "../../styles/GlobalStyles";
import ListItem from "../../components/ListItem";
import { StatusBar } from "expo-status-bar";
import Icon from "../../components/Icon";
import Seperator from "../../components/Seperator";
import Screen from "../Screen/";
import routes from "../../navigation/routes";

const AccountScreen = ({ navigation }) => {
  const settings = [
    {
      key: 1,
      title: "My Listings",
      iconName: "format-list-bulleted",
      background: colors.primary,
    },
    {
      key: 2,
      title: "My messages",
      iconName: "email",
      background: colors.secondary,
    },
  ];

  return (
    <Screen>
      <StatusBar hidden={false} />
      <View style={styles.container}>
        <View style={styles.header}>
          <ListItem
            title="Atabekov Farrukh"
            subtitle="augini18@gmail.com"
            image={images.farrukh}
          />
        </View>
        <FlatList
          data={settings}
          keyExtractor={(item) => item.key.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => {
                navigation.navigate(routes.MyMessages);
              }}
              ImageComponent={
                <Icon
                  name={item.iconName}
                  size={40}
                  backgroundColor={item.background}
                  iconColor="white"
                />
              }
            />
          )}
          ItemSeparatorComponent={() => <Seperator />}
        />
        <View style={{ marginTop: 20 }}>
          <ListItem
            title="Logout"
            ImageComponent={
              <Icon
                name="logout"
                size={40}
                backgroundColor="#ffe66d"
                iconColor="white"
              />
            }
          />
        </View>
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  header: {
    marginVertical: 20,
  },
});
