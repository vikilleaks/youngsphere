import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import Constants from "expo-constants";
import { WebView } from "react-native-webview";

const Lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget risus eu nulla tristique laoreet sit amet in libero. Nullam sollicitudin malesuada ligula nec interdum. Curabitur sodales hendrerit ante, in fringilla turpis varius vel. Cras suscipit enim tellus, sed placerat neque mollis in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris diam metus, mattis sed elit et, dapibus congue risus. Vestibulum fermentum velit eget dolor euismod consequat. Sed iaculis, libero eu malesuada hendrerit, orci urna eleifend sem, vitae faucibus tortor nunc ut enim. Aliquam erat volutpat. Vivamus lacus diam, fringilla quis erat non, fermentum tristique nunc. Ut vel ligula vitae metus accumsan auctor. Nam malesuada libero dignissim fringilla suscipit. Donec consectetur dolor nibh, nec consectetur dui lobortis sed. Aenean varius consequat risus vitae volutpat. Nullam malesuada eros id sapien accumsan, ac congue felis ultricies.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget risus eu nulla tristique laoreet sit amet in libero. Nullam sollicitudin malesuada ligula nec interdum. Curabitur sodales hendrerit ante, in fringilla turpis varius vel. Cras suscipit enim tellus, sed placerat neque mollis in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris diam metus, mattis sed elit et, dapibus congue risus. Vestibulum fermentum velit eget dolor euismod consequat. Sed iaculis, libero eu malesuada hendrerit, orci urna eleifend sem, vitae faucibus tortor nunc ut enim. Aliquam erat volutpat. Vivamus lacus diam, fringilla quis erat non, fermentum tristique nunc. Ut vel ligula vitae metus accumsan auctor. Nam malesuada libero dignissim fringilla suscipit. Donec consectetur dolor nibh, nec consectetur dui lobortis sed. Aenean varius consequat risus vitae volutpat. Nullam malesuada eros id sapien accumsan, ac congue felis ultricies.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget risus eu nulla tristique laoreet sit amet in libero. Nullam sollicitudin malesuada ligula nec interdum. Curabitur sodales hendrerit ante, in fringilla turpis varius vel. Cras suscipit enim tellus, sed placerat neque mollis in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris diam metus, mattis sed elit et, dapibus congue risus. Vestibulum fermentum velit eget dolor euismod consequat. Sed iaculis, libero eu malesuada hendrerit, orci urna eleifend sem, vitae faucibus tortor nunc ut enim. Aliquam erat volutpat. Vivamus lacus diam, fringilla quis erat non, fermentum tristique nunc. Ut vel ligula vitae metus accumsan auctor. Nam malesuada libero dignissim fringilla suscipit. Donec consectetur dolor nibh, nec consectetur dui lobortis sed. Aenean varius consequat risus vitae volutpat. Nullam malesuada eros id sapien accumsan, ac congue felis ultricies.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget risus eu nulla tristique laoreet sit amet in libero. Nullam sollicitudin malesuada ligula nec interdum. Curabitur sodales hendrerit ante, in fringilla turpis varius vel. Cras suscipit enim tellus, sed placerat neque mollis in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris diam metus, mattis sed elit et, dapibus congue risus. Vestibulum fermentum velit eget dolor euismod consequat. Sed iaculis, libero eu malesuada hendrerit, orci urna eleifend sem, vitae faucibus tortor nunc ut enim. Aliquam erat volutpat. Vivamus lacus diam, fringilla quis erat non, fermentum tristique nunc. Ut vel ligula vitae metus accumsan auctor. Nam malesuada libero dignissim fringilla suscipit. Donec consectetur dolor nibh, nec consectetur dui lobortis sed. Aenean varius consequat risus vitae volutpat. Nullam malesuada eros id sapien accumsan, ac congue felis ultricies.";

export default function BottomModal() {
  trans = new Animated.Value(0);
  const renderHeader = (name) => (
    <View
      style={{
        width: "100%",
        backgroundColor: "blue",
        height: 40,
        borderWidth: 2,
      }}
    >
      <Text>{name}</Text>
    </View>
  );

  const renderInner = () => (
    <View>
      {renderHeader("one")}
      <Text style={styles.content}>{Lorem}</Text>
    </View>
  );

  return (
    <>
      <WebView
        source={{
          uri:
            "https://github.com/osdnk/react-native-reanimated-bottom-sheet/blob/master/Example/Test.js",
        }}
        style={styles.web}
      />
      <BottomSheet
        contentPosition={trans}
        snapPoints={[100, 400]}
        renderContent={renderInner}
      />
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "green",
  },
  web: {
    marginTop: Constants.statusBarHeight,
  },
});
