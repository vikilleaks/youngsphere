import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import * as Permissions from "expo-permissions";

import CameraToolbar from "./CameraToolbar";

export default function CameraPage() {
  const [camera, setCamera] = useState();
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [captures, setCaptures] = useState([]);
  const [capturing, setCapturing] = useState();
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [hasCameraPermission, setHasCameraPermission] = useState();

  const handlePressIn = () => setCapturing(true);

  const handlePressOut = () => {
    if (capturing) camera.stopRecording();
  };

  // handlePress() uses takePictureAsync() method of the camera component to take a photo and then it adds the returned data to the captures array and sets capturing to false.
  const handlePress = async () => {
    const photoData = await camera.takePictureAsync();
    setCapturing(false);
    setCaptures([photoData, ...captures]);
  };

  const requestPermission = async () => {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const hasCameraPermission = camera.status === "granted";
    setHasCameraPermission(hasCameraPermission);
  };

  // This function will run every time state or props are changed. An async function returns a promise which isn't supported by useEffect() so we need to wrap it inside another function.
  useEffect(() => {
    requestPermission();
  }, []);

  if (hasCameraPermission === null) {
    return <View />;
  } else if (hasCameraPermission === false) {
    return <Text>Access to camera has been denied.</Text>;
  }

  return (
    <>
      <View>
        <Camera
          type={cameraType}
          flashMode={flashMode}
          style={styles.preview}
          // To use methods that Camera exposes (e.g takePictureAsync()) we need to create a component ref and invoke them using it.
          ref={(camera) => setCamera(camera)}
        />
      </View>
      {console.log(captures)}
      <CameraToolbar
        cameraType={cameraType}
        capturing={capturing}
        flashMode={flashMode}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        setCameraType={setCameraType}
        setFlashMode={setFlashMode}
      />
    </>
  );
}

const styles = StyleSheet.create({
  preview: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});
