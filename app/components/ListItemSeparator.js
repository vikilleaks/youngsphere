import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

const ListItemSeperator = () => <View style={styles.seperator} />;

const styles = StyleSheet.create({
  seperator: {
    backgroundColor: colors.light,
    height: 1,
    width: "100%",
  },
});

export default ListItemSeperator;
