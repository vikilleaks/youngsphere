import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import AuthNavigator from "../components/navigation/AuthNavigator";
import UserNavigator from "../components/navigation/UserNavigator";
import { ActivityIndicator, AsyncStorage } from "react-native";

class MainScreen extends Component {
  constructor() {
    super();
    this.state = { hasToken: false, isLoaded: false };
  }

  componentDidMount() {
    AsyncStorage.getItem("auth_token").then((token) => {
      this.setState({ hasToken: token !== null, isLoaded: true });
    });
  }
  render() {
    if (!this.state.isLoaded) {
      return <ActivityIndicator />;
    } else {
      return (
        <Router>
          <Scene key="root">
            <Scene
              component={AuthNavigator}
              hideNavBar={true}
              initial={!this.state.hasToken}
              key="WelcomePage"
              title="Welcome Page"
            />
            <Scene
              component={UserNavigator}
              hideNavBar={true}
              initial={this.state.hasToken}
              key="UserPage"
              title="User Page"
            />
          </Scene>
        </Router>
      );
    }
  }
}

export default MainScreen;
