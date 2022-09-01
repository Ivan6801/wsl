import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  addPokemonFavoriteApi,
  getPokemonsFavoriteApi,
} from "../../api/favorite";

export default function Favorite(props) {
  const { id } = props;

  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };

  const getFave = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  };

  return (
    <>
      <Icon
        name="heart"
        color="#fff"
        size={20}
        onPress={addFavorite}
        style={{ marginRight: 20 }}
      />
      <Icon
        name="user"
        color="#fff"
        size={20}
        onPress={getFave}
        style={{ marginRight: 20 }}
      />
    </>
  );
}
