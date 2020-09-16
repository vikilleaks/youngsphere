import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, AsyncStorage } from "react-native";

import ListItem from "../ListItem";
import ListItemSeparator from "../ListItemSeparator";

const img = require("../../assets/youngspherelogo.jpeg");

export default function CommentsScreen({ style, id }) {
  const [arrayholder, setArrayholder] = useState([]);
  const [ID, setID] = useState(id);

  const NumComments = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + AsyncStorage.getItem("auth_token")
    );
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
        console.log(result.included);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    NumComments();
  }, []);

  return (
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
  );
}

const styles = StyleSheet.create({});
