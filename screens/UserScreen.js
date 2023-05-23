import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import firebase from './firebaseconfig';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { GOOGLE_MAPS_API_KEY } from './config.js';


const UserScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [driverLocations, setDriverLocations] = useState([]);

  useEffect(() => {
    const getUserLocation = async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setUserLocation({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      // Escucha los cambios en las ubicaciones de los conductores en la base de datos de Firebase
      firebase.database().ref('driverLocation').on('value', snapshot => {
        const drivers = snapshot.val();
        if (drivers) {
          const driverArray = Object.values(drivers);
          setDriverLocations(driverArray);
        }
      });
    };

    getUserLocation();
  }, []);

  const handleMarkerPress = async (driverLocation) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${driverLocation.latitude},${driverLocation.longitude}&key=${GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const placeName = data.results[0].formatted_address;
        console.log('Place Name:', placeName);
        // Aquí puedes implementar la lógica para mostrar información sobre el lugar al que se dirige el usuario
      }
    } catch (error) {
      console.log('Error fetching place details:', error);
    }
  };

  return (
    <View>
      <MapView style={{ width: '100%', height: '80%' }} region={userLocation}>
        {userLocation && (
          <Marker coordinate={userLocation} pinColor="blue" title="Tu ubicación" />
        )}
        {driverLocations.map((driverLocation, index) => (
          <Marker
            key={index}
            coordinate={driverLocation}
            pinColor="red"
            onPress={() => handleMarkerPress(driverLocation)}
          />
        ))}
      </MapView>
      <Button title="Refresh" onPress={() => {}} />
    </View>
  );
};

export default UserScreen;