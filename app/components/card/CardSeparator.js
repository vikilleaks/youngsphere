import React from "react";
import { StyleSheet, View } from "react-native";

export default function CardSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 20,
  },
});
