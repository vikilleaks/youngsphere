import React from "react";
import { StyleSheet } from "react-native";
// formik uses React context to pass objects down.
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({});
