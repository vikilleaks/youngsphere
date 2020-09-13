import React from "react";
import { StyleSheet, Image, AsyncStorage, Alert } from "react-native";
import * as Yup from "yup";

// easy import using index.js
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import api from "../config/api";

// Define it outside the function as we don't want it to be defined again as our function is re-rendered
const validationSchema = Yup.object().shape({
  // No need of defining regex using Yup
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

let STORAGE_KEY = "id_token";

const onValueChange = async (item, selectedValue) => {
  try {
    await AsyncStorage.setItem(item, selectedValue);
  } catch (error) {
    console.log("AsyncStorage error: " + error.message);
  }
};

const userLogin = (values) => {
  if (values) {
    console.log(values);
    var myHeaders = new Headers();
    myHeaders.append("contentType", "application/json");
    myHeaders.append("dataType", "json");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      user: { email: values.email, password: values.password },
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    fetch(api.SIGN_IN, requestOptions)
      .then((response) => {
        console.log(response.headers.get("Authorization"));
        onValueChange(STORAGE_KEY, response.headers.get("Authorization"));
      })
      .catch((error) => console.log("error", error));
  }
};

//login page
export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/youngspherelogo.jpeg")}
      ></Image>
      <AppForm
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => userLogin(values)}
        validationSchema={validationSchema}
      >
        {/* children of AppForm */}
        <AppFormField
          name="email"
          maxLength={255}
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress" //only for ios
        ></AppFormField>
        <AppFormField
          name="password"
          maxLength={255}
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password" //only for ios
        ></AppFormField>
        <SubmitButton title="Login" />
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
