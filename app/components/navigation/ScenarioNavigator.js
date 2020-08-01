import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "../../screens/SearchScreen";
import BrowserScreen from "../../screens/BrowserScreen";

const Stack = createStackNavigator();

const ScenarioNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Browser"
      component={BrowserScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default ScenarioNavigator;
