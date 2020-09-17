import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, AsyncStorage } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../config/colors";

export default function LikeButton({ id }) {
  const [likes, setLikes] = useState(0);
  const [ID, setID] = useState(id);

  const UserLike = () => {
    var myHeaders = new Headers();
    myHeaders.append("contentType", "application/json");
    myHeaders.append("dataType", "json");
    myHeaders.append(
      "Authorization",
      "Bearer " + AsyncStorage.getItem("auth_token")
    );
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ verb: "like" });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    fetch(
      "http://youngsphere.herokuapp.com/api/v1/scenarios/" + ID + "/reactions",
      requestOptions
    )
      .then((response) => response.json())
      .then(() => NumLikes())
      .catch((error) => console.log("error", error));
  };

  const NumLikes = () => {
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
        setLikes(result.data.attributes.num_of_likes);
      })
      .catch((error) => console.log("error", error));
    if (likes == 0) {
      return <AntDesign name="like2" size={24} color="black" />;
    } else {
      return (
        <>
          <AntDesign name="like1" size={24} color="black">
            {likes}
          </AntDesign>
        </>
      );
    }
  };

  useEffect(() => {
    NumLikes();
  }, []);

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={UserLike}>
        <NumLikes />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "30%",
    margin: 10,
    flexDirection: "row",
  },
  text: {
    marginLeft: 5,
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
