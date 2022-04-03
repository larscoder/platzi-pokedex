import { Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonsFavoriteApi } from "../api/favorite";

export default function FavoriteScreen(props) {
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getPokemonsFavoriteApi();
      console.log(response);
    })();
  }, []);

  return (
    <View>
      <Text>FavoriteScreen</Text>
    </View>
  );
}
