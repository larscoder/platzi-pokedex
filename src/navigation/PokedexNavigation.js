import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screens/PokedexScreen";
import PokemonScreen from "../screens/PokemonScreen";

const PokedexStack = createNativeStackNavigator();

export default function PokedexNavigation(props) {
  return (
    <PokedexStack.Navigator>
      <PokedexStack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          headerShown: false,
        }}
      />
      <PokedexStack.Screen name="Pokemon" component={PokemonScreen} />
    </PokedexStack.Navigator>
  );
}
