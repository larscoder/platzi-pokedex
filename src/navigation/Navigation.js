import { Text, View } from "react-native";
import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteScreen from "../screens/FavoriteScreen";
import PokedexScreen from "../screens/PokedexScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

export default class Navigation extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
        <Tab.Screen name="Pokedex" component={PokedexScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    );
  }
}
