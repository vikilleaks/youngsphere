import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  PanResponder,
  Animated,
  View,
} from "react-native";
import CommentsScreen from "./CommentsScreen";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import LikeButton from "./LikeButton";

export default class BottomModal extends Component {
  constructor(props) {
    super(props);

    const { height, width } = Dimensions.get("screen");

    const initialPosition = { x: 0, y: height - 75 };
    const position = new Animated.ValueXY(initialPosition);

    const parentResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: (e, gestureState) => {
        return false;
      },
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (e, gestureState) => {
        if (this.state.toTop) {
          return gestureState.dy > 6;
        } else {
          return gestureState.dy < -6;
        }
      },
      onPanResponderTerminationRequest: () => false,
      onPanResponderMove: (evt, gestureState) => {
        let newy = gestureState.dy;
        if (this.state.toTop && newy < 0) return;
        if (this.state.toTop) {
          position.setValue({ x: 0, y: newy });
        } else {
          position.setValue({ x: 0, y: initialPosition.y + newy });
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (this.state.toTop) {
          if (gestureState.dy > 50) {
            this.snapToBottom(initialPosition);
          } else {
            this.snapToTop();
          }
        } else {
          if (gestureState.dy < -90) {
            this.snapToTop();
          } else {
            this.snapToBottom(initialPosition);
          }
        }
      },
    });

    this.offset = 0;
    this.parentResponder = parentResponder;
    this.state = { position, toTop: false };
  }

  snapToTop = () => {
    Animated.timing(this.state.position, {
      toValue: { x: 0, y: Constants.statusBarHeight },
      duration: 300,
      useNativeDriver: false,
    }).start(() => {});
    this.setState({ toTop: true });
  };

  snapToBottom = (initialPosition) => {
    Animated.timing(this.state.position, {
      toValue: initialPosition,
      duration: 150,
      useNativeDriver: false,
    }).start(() => {});
    this.setState({ toTop: false });
  };

  hasReachedTop({ layoutMeasurement, contentOffset, contentSize }) {
    return contentOffset.y == 0;
  }

  render() {
    const { height } = Dimensions.get("window");

    return (
      <>
        <WebView
          source={{
            uri: "https://github.com/vikilleaks",
          }}
          style={styles.web}
        />
        <Animated.View
          style={[
            styles.draggable,
            { height },
            this.state.position.getLayout(),
          ]}
          {...this.parentResponder.panHandlers}
        >
          <Text style={styles.dragHandle}>=</Text>
          <LikeButton />
          <CommentsScreen />
        </Animated.View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  draggable: {
    position: "absolute",
    right: 0,
    backgroundColor: "skyblue",
    alignItems: "center",
  },
  dragHandle: {
    fontSize: 22,
    color: "#707070",
    height: 60,
  },
  scroll: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  web: {
    marginTop: Constants.statusBarHeight,
  },
});
