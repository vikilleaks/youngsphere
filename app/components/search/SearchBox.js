import React from "react";
import { StyleSheet } from "react-native";
import { connectSearchBox } from "react-instantsearch/connectors";
import AppTextInput from "../AppTextInput";

const SearchBox = connectSearchBox(({ refine, currentRefinement }) => {
  return (
    <AppTextInput
      style={styles.textBox}
      // refine: Sets a new query and searches.
      onChangeText={(text) => refine(text)}
      value={currentRefinement}
      placeholder="I'm looking for...."
      clearButtonMode="always"
      spellCheck={false}
      autoCorrect={false}
      autoCapitalize="none"
    />
  );
});

const styles = StyleSheet.create({
  textBox: {
    height: 40,
    borderWidth: 1,
    borderColor: "#333",
    padding: 10,
    margin: 10,
    flex: 1,
  },
});

export default SearchBox;
