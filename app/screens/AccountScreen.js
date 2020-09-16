import React from "react";
import { StyleSheet, Text, AsyncStorage, Button, Alert } from "react-native";

import Screen from "../components/Screen";
import routes from "../components/navigation/routes";

const userLogout = async (navigation) => {
  try {
    await AsyncStorage.removeItem("auth_token");
    Alert.alert("Logout Success!");
    navigation.navigate(routes.LOGIN);
  } catch (error) {
    console.log("AsyncStorage error: " + error.message);
  }
};

export default function AccountScreen({ navigation }) {
  return (
    <Screen>
      <Text>Welcome to AccountScreen</Text>
      <Button title="Logout" onPress={() => userLogout(navigation)} />
    </Screen>
  );
}

const styles = StyleSheet.create({});
