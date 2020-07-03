import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { colors, images } from "../../styles/GlobalStyles";
import Card from "../../components/Card";
import ListItem from "../../components/ListItem";
import { StatusBar } from "expo-status-bar";
import SettingsItem from "../../components/SettingItem";

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
          image={images.mosh}
          title="Mosh Hamedani"
          subtitle="fsdfdsf@gmail.com"
        />
      </View>
      <FlatList
        style={{ backgroundColor: "red" }}
        data={settings}
        renderItem={({ item }) => (
          <SettingsItem
            iconName={item.iconName}
            iconBackground={item.background}
            title={item.title}
          />
        )}
      />
      <View style={{ marginTop: 40, height: "30%" }}>
        <SettingsItem
          iconName="logout"
          iconBackground="#ffe66d"
          title="Log out"
        />
      </View>
      <StatusBar hidden={false} />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: "#ffff",
    marginVertical: 40,
  },
});
