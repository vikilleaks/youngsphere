import React from "react";
import algoliasearch from "algoliasearch/lite";
import { StyleSheet, Text, View } from "react-native";
import { InstantSearch } from "react-instantsearch/native";
import SearchBox from "../components/search/SearchBox";
import Results from "../components/search/Results";

const searchClient = algoliasearch(
  "VNLWFBE1TB",
  "636fe3e8cc33682e9245cd9f4499b6a8"
);

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.brandTitle}>Scenario Search</Text>
      <InstantSearch searchClient={searchClient} indexName="Scenario">
        <View style={styles.searchBoxContainer}>
          <SearchBox />
        </View>
        <Results />
      </InstantSearch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  brandTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  searchBoxContainer: {
    width: "100%",
    flexDirection: "row",
  },
});
