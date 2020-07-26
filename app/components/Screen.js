import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Constants from "expo-constants";
// SafeAreaView for both android and ios
export default function Screen({ children, ...otherProps }) {
  return (
    <SafeAreaView style={styles.screen} {...otherProps}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    // Screen component must cover the whole screen
    flex: 1,
  },
});
