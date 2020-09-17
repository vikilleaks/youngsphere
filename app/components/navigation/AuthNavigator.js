import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import WelcomeScreen from "../../screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AuthNavigator;
