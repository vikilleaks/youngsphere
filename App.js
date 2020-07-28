import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/components/navigation/AuthNavigator";
import navigatonTheme from "./app/components/navigation/navigatonTheme";
import AppNavigator from "./app/components/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigatonTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
