import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../AppText";
import colors from "../../config/colors";

export default function ErrorMessage({ error, visible }) {
  // if we touched a field and moved on to the next one without correctly filling the previous one, the error will be showed for that field only.
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});
