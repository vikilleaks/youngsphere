import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import routes from "../components/navigation/routes";

export default function WelcomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to Youngsphere</Text>
      <Button title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
      <Button
        title="Register"
        onPress={() => navigation.navigate(routes.REGISTER)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
