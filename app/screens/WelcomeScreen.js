import React from "react";
import { StyleSheet, Text, Button } from "react-native";
import routes from "../components/navigation/routes";

import Screen from "../components/Screen";

export default function WelcomeScreen({ navigation }) {
  return (
    <Screen>
      <Text>Welcome to Youngsphere</Text>
      <Button title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
      <Button
        title="Register"
        onPress={() => navigation.navigate(routes.REGISTER)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
