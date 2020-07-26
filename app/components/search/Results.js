import React from "react";
import { FlatList } from "react-native";
import { connectInfiniteHits } from "react-instantsearch/connectors";
import Repository from "./Repository";
import ItemSeparator from "./ItemSeparator";

const Results = connectInfiniteHits(({ hits, hasMore, refine }) => {
  const onEndReached = () => {
    if (hasMore) {
      refine();
    }
  };

  return (
    <FlatList
      data={hits}
      onEndReached={onEndReached}
      keyExtractor={(repo) => repo.objectID}
      renderItem={({ item }) => (
        <Repository
          title={item.title}
          subTitle={item.subTitle}
          image={item.image}
          onPress={() => console.log(item.title)}
        />
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
});

export default Results;
