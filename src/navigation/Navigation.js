import React, { Component } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoriteScreen from "../screens/FavoriteScreen";
import PokedexScreen from "../screens/PokedexScreen";
import AccountScreen from "../screens/AccountScreen";
import pokeball from "../assets/pokeball.png";

const Tab = createBottomTabNavigator();

export default class Navigation extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarLabel: "Favoritos",
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Pokedex"
          component={PokedexScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => renderPokeball(),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: "Mi Cuenta",
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

function renderPokeball() {
  return (
    <Image source={pokeball} style={{ width: 75, height: 75, top: -15 }} />
  );
}
