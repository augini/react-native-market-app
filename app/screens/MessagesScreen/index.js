import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Platform } from "react-native";
import { images, colors } from "../../styles/GlobalStyles";
import ListItem from "../../components/ListItem";
import { StatusBar } from "expo-status-bar";
import Seperator from "../../components/Seperator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";

const MessagesScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "Farrukh",
      description: "Hey there what have you been doing?",
      image: images.farrukh,
    },
    {
      id: 2,
      title: "Farrukh",
      description: "Hey there what have you been doing?",
      image: images.farrukh,
    },
    {
      id: 3,
      title: "Farrukh",
      description: "Hey there what have you been doing?",
      image: images.farrukh,
    },
    {
      id: 4,
      title: "Farrukh",
      description: "Hey there what have you been doing?",
      image: images.farrukh,
    },
    {
      id: 5,
      title: "Farrukh",
      description: "Hey there what have you been doing?",
      image: images.farrukh,
    },
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const deleteMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };
  return (
    <View style={styles.statusBar}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "Farrukh",
              description: "Hey there what have you been doing?",
              image: images.farrukh,
            },
          ]);
        }}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            handleRightActions={() => (
              <ListItemDeleteAction
                onPress={() => {
                  deleteMessage(item.id);
                }}
              />
            )}
          />
        )}
        ItemSeparatorComponent={() => <Seperator />}
      ></FlatList>
      <StatusBar hidden={false}></StatusBar>
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  statusBar: {
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
