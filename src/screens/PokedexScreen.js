import React, { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";
import { getPokemonsApi } from "../api/pokemon";

export default function PokedexScreen(props) {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>PokedexScreen</Text>
      <Button
        onPress={() => props.navigation.navigate("Pokemon")}
        title="Go To Pokemon"
      />
    </View>
  );
}
