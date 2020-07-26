import React from "react";
import { StyleSheet } from "react-native";
// Formik tracks our form state so need to make multiple state variables. It has inbuilt support for form validation using Yup.
import { Formik } from "formik";

export default function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {/* function should return JSX using a React fragment*/}
      {() => <>{children}</>}
    </Formik>
  );
}

const styles = StyleSheet.create({});
