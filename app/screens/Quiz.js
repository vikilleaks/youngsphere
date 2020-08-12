import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";

import { QuizButton, QuizButtonContainer } from "../components/quiz/QuizButton";
import { Alert } from "../components/quiz/Alert";
import Screen from "../components/Screen";

export default function Quiz({ navigation, route }) {
  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(route.params.questions.length);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);

  const checkAnswer = (correct) => {
    setAnswered(true);
    if (correct) {
      setCorrectCount(correctCount + 1);
      setAnswerCorrect(true);
    } else {
      setAnswerCorrect(false);
    }
    setTimeout(() => nextQuestion(), 750);
  };

  const nextQuestion = () => {
    const nextIndex = activeQuestionIndex + 1;

    if (nextIndex >= totalCount) {
      return navigation.popToTop();
    }
    setActiveQuestionIndex(nextIndex);
    setAnswered(false);
  };

  const questions = route.params.questions;

  return (
    <View style={[styles.container, { backgroundColor: route.params.color }]}>
      <Screen style={styles.safearea}>
        <View>
          <Text style={styles.text}>
            {questions[activeQuestionIndex].question}
          </Text>

          <QuizButtonContainer>
            {questions[activeQuestionIndex].answers.map((answer) => (
              <QuizButton
                key={answer.id}
                text={answer.text}
                onPress={() => checkAnswer(answer.correct)}
              />
            ))}
          </QuizButtonContainer>
        </View>

        <Text style={styles.text}>{`${correctCount}/${totalCount}`}</Text>
      </Screen>
      <Alert correct={answerCorrect} visible={answered} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600",
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between",
  },
});
