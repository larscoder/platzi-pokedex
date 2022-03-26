import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

export default function PokemonCard(props) {
  const { pokemon } = props;

  const goToPokemon = () => {
    console.log(`Vamos al detalle del Pokemon: ${pokemon.name}`);
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Text style={styles.order}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    backgroundColor: "gray",
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    color: "#ffffff",
  },
  order: {
    position: "absolute",
    top: 10,
    right: 10,
    color: "#ffffff",
    fontSize: 11,
  },
});
