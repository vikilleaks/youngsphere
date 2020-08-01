import React from "react";
import { WebView } from "react-native-webview";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function BrowserScreen({ route }) {
  const scenario = route.params;
  return <WebView source={{ uri: scenario.link }} style={styles.web} />;
}

const styles = StyleSheet.create({
  web: {
    marginTop: Constants.statusBarHeight,
  },
});
