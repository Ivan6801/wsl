import React from 'react';
import { View, Text, Button } from 'react-native'
import Saludar from '../components/Saludar';

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View>
      <Text>Estamos en HomeScreen</Text>
      <Saludar 
        firstname='Ivan'
        lastname='Gonzalez Gonzalez'
      />
      <Button onPress={goToSettings} title='Ir a ajustes' />
    </View>
  );
}
