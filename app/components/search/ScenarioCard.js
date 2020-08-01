import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";

import colors from "../../config/colors";
import AppText from "../AppText";

export default function ScenarioCard({ title, subTitle, image, onPress }) {
  console.log(image);
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require("../../assets/heart.jpg")}
        ></Image>
        <View style={styles.details}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  details: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 220,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 7,
  },
});
