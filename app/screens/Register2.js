import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(1).label("Username"),
  category: Yup.object().required().nullable().label("category"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

const categories = [
  { label: "Class 5", value: 5 },
  { label: "Class 6", value: 6 },
  { label: "Class 7", value: 7 },
  { label: "Class 8", value: 8 },
];

const userSignup = (values) => {
  if (values) {
    var myHeaders = new Headers();
    myHeaders.append("contentType", "application/json");
    myHeaders.append("dataType", "json");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      user: {
        name: values.username,
        email: values.email,
        password: values.password,
        password_confirmation: values.password,
      },
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    fetch("https://youngsphere.herokuapp.com/api/v1/account", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }
};

export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/youngspherelogo.jpeg")}
      ></Image>
      <AppForm
        initialValues={{
          username: "",
          category: null,
          email: "",
          password: "",
        }}
        onSubmit={(values) => userSignup(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="username"
          maxLength={255}
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          placeholder="Username"
        />
        <AppFormPicker
          items={categories}
          name="category"
          icon="school"
          placeholder="Class"
        />
        <AppFormField
          name="email"
          maxLength={255}
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
        />
        <AppFormField
          name="password"
          maxLength={255}
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry={true}
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 40,
  },
});
