import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import colors from "../config/colors";
import Card from "../components/card/Card";
import Screen from "../components/Screen";
import CardSeparator from "../components/card/CardSeparator";
import CardDelete from "../components/card/CardDelete";

const initData = [
  {
    id: 1,
    title: "Heart",
    subTitle: "John Doe",
    image: require("../assets/heart.jpg"),
  },
  {
    id: 2,
    title: "Brain",
    subTitle: "Vivek Chandela",
    image: require("../assets/brain.jpg"),
  },
  {
    id: 3,
    title: "Lungs",
    subTitle: "John Doe",
    image: require("../assets/lungs.jpg"),
  },
];

export default function NewScenarios() {
  // If we delete an item from data array, we need to re-render our function component. For this, we need to have state in our component using hooks (JS functions specifically for function component and not class component).
  const [items, setItems] = useState(initData);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (item) => {
    // 1. delete the item from data array
    // 2. call the server to delete
    const newData = items.filter((m) => m.id !== item.id);
    setItems(newData);
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log(item.title)}
            renderRightActions={() => (
              <CardDelete onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <CardSeparator />}
        refreshing={refreshing}
        // we should ask the backend for the new array of scenarios
        onRefresh={() => {
          setItems([
            {
              id: 3,
              title: "Lungs",
              subTitle: "John Doe",
              image: require("../assets/lungs.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 20,
    paddingTop: 100,
  },
});
