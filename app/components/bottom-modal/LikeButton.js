import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../config/colors";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  const AddLike = () => {
    setLikes((likes + 1) % 2);
  };

  const ShowLike = () => {
    if (likes == 0) {
      return <AntDesign name="like2" size={24} color="black" />;
    } else {
      return (
        <>
          <AntDesign name="like1" size={24} color="black" />
        </>
      );
    }
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={AddLike}>
        <ShowLike />
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
