import React from "react";
import MainScreen from "./app/screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
}
