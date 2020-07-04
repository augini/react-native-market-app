import React from "react";
import { StyleSheet, Text, View, FlatList, ImageStore } from "react-native";
import { colors, images } from "../../styles/GlobalStyles";
import Card from "../../components/Card";
import ListItem from "../../components/ListItem";
import { StatusBar } from "expo-status-bar";
import SettingsItem from "../../components/SettingItem";
import Icon from "../../components/Icon";
import Seperator from "../../components/Seperator";

const AccountScreen = () => {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <ListItem
          title="Mosh Hamedani"
          subtitle="programmingwithmosh@gmail.com"
          image={images.mosh}
        />
      </View>
      <FlatList
        data={settings}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
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
      <StatusBar hidden={false} />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: colors.background,
  },
  header: {
    marginVertical: 20,
  },
});
