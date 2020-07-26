import React from "react";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
// react-native-easy-grid package has amazing flexible grid system support
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

// Access modes and settings of camera companent
const { FlashMode: CameraFlashModes, Type: CameraTypes } = Camera.Constants;

// This is a functional stateless component. So simply renders a view without concerning itself with managing state or performing actions.
export default function CameraToolbar({
  // default values for properties
  cameraType = CameraTypes.back,
  capturing = false,
  flashMode = CameraFlashModes.off,
  onPress,
  onPressIn,
  onPressOut,
  setCameraType,
  setFlashMode,
}) {
  return (
    // Grid with a single row and 3 columns
    <Grid style={styles.bottomToolbar}>
      <Row>
        {/* Flash button */}
        <Col style={styles.alignCenter}>
          <TouchableOpacity
            onPress={() =>
              setFlashMode(
                flashMode === CameraFlashModes.on
                  ? CameraFlashModes.off
                  : CameraFlashModes.on
              )
            }
          >
            <Ionicons
              name={
                flashMode == CameraFlashModes.on ? "md-flash" : "md-flash-off"
              }
              color="white"
              size={30}
            />
          </TouchableOpacity>
        </Col>
        {/* middle col has 50% width and other 2 have 25% each */}
        <Col size={2} style={styles.alignCenter}>
          <TouchableWithoutFeedback
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onPress}
          >
            {/* When capturing is true, it adds captureBtnActive style on top of captureBtn style and then it renders a child View component with captureBtnInternal style. */}
            <View
              style={[styles.captureBtn, capturing && styles.captureBtnActive]}
            >
              {capturing && <View style={styles.captureBtnInternal} />}
            </View>
          </TouchableWithoutFeedback>
        </Col>
        {/* Camera orientation */}
        <Col style={styles.alignCenter}>
          <TouchableOpacity
            onPress={() =>
              setCameraType(
                cameraType === CameraTypes.back
                  ? CameraTypes.front
                  : CameraTypes.back
              )
            }
          >
            <Ionicons name="md-reverse-camera" color="white" size={30} />
          </TouchableOpacity>
        </Col>
      </Row>
    </Grid>
  );
}

const styles = StyleSheet.create({
  //  horizontally and vertically centers all of an element's children
  alignCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomToolbar: {
    width: Dimensions.get("screen").width,
    position: "absolute",
    height: 100,
    bottom: 0,
  },
  captureBtn: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: "#FFFFFF",
  },
  captureBtnActive: {
    width: 80,
    height: 80,
  },
  // renders a red circle inside the capture button to indicate that the camera is taking a picture.
  captureBtnInternal: {
    width: 76,
    height: 76,
    borderWidth: 2,
    borderRadius: 76,
    backgroundColor: "red",
    borderColor: "transparent",
  },
});
