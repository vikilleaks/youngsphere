import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../../screens/AccountScreen";
import CameraPage from "../camera/CameraPage";
import ScenarioNavigator from "./ScenarioNavigator";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const UserNavigator = () => (
  <NavigationContainer independent={true}>
    <Tab.Navigator>
      <Tab.Screen
        name="Search"
        component={ScenarioNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default UserNavigator;
