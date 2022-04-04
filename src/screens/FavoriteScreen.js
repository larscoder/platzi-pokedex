import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavoriteApi } from "../api/favorite";
import { getPokemonDetailIdApi } from "../api/pokemon";
import useAuth from "../hooks/useAuth";
import PokemonList from "../components/PokemonList";
import NoLogged from "../components/NoLogged";

export default function FavoriteScreen(props) {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          try {
            const response = await getPokemonsFavoriteApi();
            const pokemosArray = [];

            for await (const pokemon of response) {
              const pokemonDetail = await getPokemonDetailIdApi(pokemon);

              pokemosArray.push({
                id: pokemonDetail.id,
                name: pokemonDetail.name,
                type: pokemonDetail.types[0].type.name,
                order: pokemonDetail.order,
                image:
                  pokemonDetail.sprites.other["official-artwork"].front_default,
              });
            }

            setPokemons([...pokemons, ...pokemosArray]);
          } catch (error) {
            console.error(error);
          }
        })();
      }
    }, [auth])
  );

  return !auth ? <NoLogged /> : <PokemonList pokemons={pokemons} />;
}
