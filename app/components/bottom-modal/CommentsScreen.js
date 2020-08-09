import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import ListItem from "../ListItem";
import ListItemSeparator from "../ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "C1",
    desciption: "How you doing?",
    image: require("../../assets/youngspherelogo.jpeg"),
  },
  {
    id: 2,
    title: "C2",
    desciption: "How you doing?",
    image: require("../../assets/youngspherelogo.jpeg"),
  },
  {
    id: 3,
    title: "C3",
    desciption: "How you doing?",
    image: require("../../assets/youngspherelogo.jpeg"),
  },
  {
    id: 4,
    title: "C4",
    desciption: "How you doing?",
    image: require("../../assets/youngspherelogo.jpeg"),
  },
  {
    id: 5,
    title: "C5",
    desciption: "How you doing?",
    image: require("../../assets/youngspherelogo.jpeg"),
  },
  {
    id: 6,
    title: "C6",
    desciption: "How you doing?",
    image: require("../../assets/youngspherelogo.jpeg"),
  },
  {
    id: 7,
    title: "C7",
    desciption: "How you doing?",
    image: require("../../assets/youngspherelogo.jpeg"),
  },
  {
    id: 8,
    title: "C8",
    desciption: "How you doing?",
    image: require("../../assets/youngspherelogo.jpeg"),
  },
  {
    id: 9,
    title: "C9",
    desciption: "How you doing?",
    image: require("../../assets/youngspherelogo.jpeg"),
  },
];

export default function CommentsScreen({ style }) {
  return (
    <FlatList
      style={style}
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.desciption}
          image={item.image}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  );
}

const styles = StyleSheet.create({});
