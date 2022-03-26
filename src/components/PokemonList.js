import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

export default function PokemonList(props) {
  const { pokemons } = props;
  console.log(pokemons);

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      key={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
