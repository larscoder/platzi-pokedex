import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/FavoriteScreen";
import PokemonScreen from "../screens/PokemonScreen";

const FavoriteStack = createNativeStackNavigator();

export default function FavoriteNavigation(props) {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favoritos",
        }}
      />
      <FavoriteStack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </FavoriteStack.Navigator>
  );
}
