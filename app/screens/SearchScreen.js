import React, { Component } from "react";

import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
} from "react-native";

import ScenarioCard from "../components/search/ScenarioCard";
import ItemSeperator from "../components/search/ItemSeparator";
import routes from "../components/navigation/routes";
import api from "../config/api";

export default class App extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, text: "" };
    this.arrayholder = [];
  }

  handleOnPress = (link) => {
    this.props.navigation.navigate(routes.QUIZ_NAV, { link });
  };

  componentDidMount() {
    var myHeaders = new Headers();
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    return fetch(api.SCENARIOS, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState(
          {
            isLoading: false,
            dataSource: result.data,
          },
          function () {
            this.arrayholder = result.data;
          }
        );
      })
      .catch((error) => console.log("error", error));
  }

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.attributes.title
        ? item.attributes.title.toUpperCase()
        : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }

  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => {
            this.SearchFilterFunction(text);
          }}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={ItemSeperator}
          renderItem={({ item }) => (
            <ScenarioCard
              title={item.attributes.title}
              subTitle={item.attributes.uploader_name}
              image={item.attributes.avatar_url}
              onPress={() =>
                this.handleOnPress(item.attributes.link_to_scenario)
              }
            />
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
  },
});
