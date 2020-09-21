import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, AsyncStorage } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../config/colors";

export default class LikeButton2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 3,
      boolUserLiked: false,
      numLikes: this.props.numLikes,
      id: this.props.id,
      userLiked: this.props.userLiked,
      isloading: true,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((state, props) => ({ ...props, isloading: false }));
    });
  }

  _getAuthToken = async () => {
    var value = await AsyncStorage.getItem("auth_token");
    return value;
  };

  UserLike = async () => {
    var myHeaders = new Headers();
    myHeaders.append("contentType", "application/json");
    myHeaders.append("dataType", "json");
    myHeaders.append("Authorization", await this._getAuthToken());
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ verb: "like" });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    fetch(
      "http://youngsphere.herokuapp.com/api/v1/scenarios/" +
        this.state.id +
        "/reactions",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({ userLiked: result });
        if (result)
          this.setState((state, props) => ({ numLikes: state.numLikes + 1 }));
        else {
          if (this.state.numLikes > 0)
            this.setState((state, props) => ({ numLikes: state.numLikes - 1 }));
        }
      })
      .catch((error) => console.log("error", error));
  };

  NumLikes = () => {
    if (this.state.userLiked == false) {
      if (this.state.numLikes == 0) {
        return (
          <>
            <Text>{this.state.userLiked.toString()}</Text>
            <AntDesign name="like2" size={24} color="black" />
          </>
        );
      } else {
        return (
          <>
            <Text>{this.state.userLiked.toString()}</Text>
            <AntDesign name="like2" size={24} color="black">
              {this.state.numLikes}
            </AntDesign>
          </>
        );
      }
    } else {
      return (
        <>
          <Text>{this.state.userLiked.toString()}</Text>
          <AntDesign name="like1" size={24} color="black">
            {this.state.numLikes}
          </AntDesign>
        </>
      );
    }
  };

  render() {
    return (
      <>
        <TouchableOpacity style={styles.button} onPress={this.UserLike}>
          {!this.state.isloading ? <this.NumLikes /> : null}
        </TouchableOpacity>
      </>
    );
  }
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
