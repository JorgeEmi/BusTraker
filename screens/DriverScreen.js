import React from 'react';
import { View, Button } from 'react-native';
import * as Location from 'expo-location';
import firebase from '../firebaseconfig'; // Ruta al archivo firebase.js que creaste

const DriverScreen = () => {
  const handleShareLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    // Guarda la ubicación en la base de datos de Firebase
    firebase.database().ref('driverLocation').set({
      latitude,
      longitude,
    });
  };

  return (
    <View>
      <Button title="Empezar a compartir ubicación" onPress={handleShareLocation} />
    </View>
  );
};

export default DriverScreen;