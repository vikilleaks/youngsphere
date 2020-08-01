import React from "react";
import { FlatList } from "react-native";
import { connectInfiniteHits } from "react-instantsearch/connectors";
import ScenarioCard from "./ScenarioCard";
import ItemSeparator from "./ItemSeparator";
import routes from "../navigation/routes";

const Results = connectInfiniteHits(({ hits, hasMore, refine, navigation }) => {
  const onEndReached = () => {
    if (hasMore) {
      refine();
    }
  };

  const handleOnPress = (item) => {
    navigation.navigate(routes.BROWSER, item);
  };

  return (
    <FlatList
      data={hits}
      onEndReached={onEndReached}
      keyExtractor={(repo) => repo.objectID}
      renderItem={({ item }) => (
        <ScenarioCard
          title={item.title}
          subTitle={item.subTitle}
          image={item.image}
          onPress={() => handleOnPress(item)}
        />
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
});

export default Results;
