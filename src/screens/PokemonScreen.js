import React, { useState, useEffect } from "react";
import { Text, ScrollView } from "react-native";
import { getPokemonDetailIdApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Stats from "../components/Pokemon/Stats";
import Type from "../components/Pokemon/Type";

export default function PokemonScreen(props) {
  const {
    navigation,
    route: {
      params: { id },
    },
  } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailIdApi(id);
        setPokemon(response);
      } catch (error) {
        console.error(error);
        navigation.goBack();
      }
    })();
  }, []);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
