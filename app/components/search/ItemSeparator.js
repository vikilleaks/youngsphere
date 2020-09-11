import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";

const ItemSeperator = () => <View style={styles.seperator} />;

const styles = StyleSheet.create({
  seperator: {
    backgroundColor: colors.light,
    height: 10,
  },
});

export default ItemSeperator;
