import React from "react";
import { StyleSheet, Text, AsyncStorage, Button, Alert } from "react-native";
import { Actions } from "react-native-router-flux";

import Screen from "../components/Screen";

const userLogout = async () => {
  try {
    await AsyncStorage.removeItem("auth_token");
    Alert.alert("Logout Success!");
    Actions.WelcomePage();
  } catch (error) {
    console.log("AsyncStorage error: " + error.message);
  }
};

export default function AccountScreen() {
  return (
    <Screen>
      <Text>Welcome to AccountScreen</Text>
      <Button title="Logout" onPress={() => userLogout()} />
    </Screen>
  );
}

const styles = StyleSheet.create({});
