import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  addPokemonFavoritesApi,
  isPokemonFavoriteApi,
  removePokemonFavoritesApi,
} from "../../api/favorite";

export default function Favorite(props) {
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);
  const { id } = props;
  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  const addFavorite = async () => {
    try {
      await addPokemonFavoritesApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavoritesApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  return (
    <Icon
      name="heart"
      color="#ffffff"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
    />
  );
}
