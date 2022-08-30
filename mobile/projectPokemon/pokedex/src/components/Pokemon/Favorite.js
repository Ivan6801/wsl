import React from "react";
import { View, Text } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Favorite(props) {
  const { id } = props;

  const addFavorite = () => {
    console.log("Añadir a favoritos", id);
  };

  return (
    <View>
      <Text>Favorite</Text>
    </View>
    // <Icon
    //   name="heart"
    //   color="#000"
    //   size={20}
    //   onPress={addFavorite}
    //   style={{ marginRight: 20 }}
    // />
  );
}