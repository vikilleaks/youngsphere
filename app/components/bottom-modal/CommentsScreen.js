import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, AsyncStorage } from "react-native";

import ListItem from "../ListItem";
import ListItemSeparator from "../ListItemSeparator";
import AppButton from "../AppButton";
import AppTextInput from "../AppTextInput";

const img = require("../../assets/youngspherelogo.jpeg");

export default function CommentsScreen({ style, id }) {
  const [arrayholder, setArrayholder] = useState([]);
  const [ID, setID] = useState(id);
  const [text, setText] = useState("");

  const _getAuthToken = async () => {
    var value = await AsyncStorage.getItem("auth_token");
    return value;
  };

  const NumComments = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", await _getAuthToken());
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    fetch(
      "http://youngsphere.herokuapp.com/api/v1/scenarios/" + ID,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setArrayholder(result.included);
      })
      .catch((error) => console.log("error", error));
  };

  const AddComment = async (userInput) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", await _getAuthToken());
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ body: userInput });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    fetch(
      "http://youngsphere.herokuapp.com/api/v1/scenarios/" + ID + "/comments",
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <AppTextInput onChangeText={(text) => setText(text)} value={text} />
      <AppButton
        title="Comment"
        style={styles.comment}
        onPress={() => {
          AddComment(text);
          setText("");
          NumComments();
        }}
      />
      <FlatList
        style={style}
        data={arrayholder}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.attributes.id}
            subTitle={item.attributes.body}
            image={img}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </>
  );
}

const styles = StyleSheet.create({});
