import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QuizIndex from "../../screens/QuizIndex";
import Quiz from "../../screens/Quiz";
import BottomModal from "../bottom-modal/BottomModal";

const Stack = createStackNavigator();

const QuizNavigator = ({ route }) => {
  const { link } = route.params;
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomModal" options={{ headerShown: false }}>
        {(otherProps) => <BottomModal {...otherProps} link={link} />}
      </Stack.Screen>
      <Stack.Screen
        name="QuizIndex"
        component={QuizIndex}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default QuizNavigator;
