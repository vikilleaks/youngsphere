import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "../../screens/SearchScreen";
import QuizNavigator from "../quiz/QuizNavigator";

const Stack = createStackNavigator();

const ScenarioNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Bottom"
      component={QuizNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default ScenarioNavigator;
