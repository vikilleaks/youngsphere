import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/components/navigation/AuthNavigator";
import NavigatonTheme from "./app/components/navigation/NavigatonTheme";
import AppNavigator from "./app/components/navigation/AppNavigator";

export default function tempApp() {
  return (
    <NavigationContainer theme={NavigatonTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
