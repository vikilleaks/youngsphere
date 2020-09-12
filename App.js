import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomModal from "./app/components/bottom-modal/BottomModal";
import CommentsScreen from "./app/components/bottom-modal/CommentsScreen";
import LikeButton from "./app/components/bottom-modal/LikeButton";
import QuizIndex from "./app/screens/QuizIndex";
import QuizNavigator from "./app/components/quiz/QuizNavigator";
import AppNavigator from "./app/components/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
