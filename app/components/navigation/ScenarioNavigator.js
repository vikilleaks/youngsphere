import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "../../screens/SearchScreen";
import BrowserScreen from "../../screens/BrowserScreen";
import Search2 from "../../screens/Search2";

const Stack = createStackNavigator();

const ScenarioNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={Search2}
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
