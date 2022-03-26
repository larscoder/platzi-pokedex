import { Button, Text, View } from "react-native";
import React from "react";

export default function PokedexScreen(props) {
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
