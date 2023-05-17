import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import firebase from '../firebase'; // Ruta al archivo firebase.js que creaste
import MapView, { Marker } from 'react-native-maps';

const ClientScreen = () => {
  const [driverLocation, setDriverLocation] = useState(null);

  useEffect(() => {
    const driverRef = firebase.database().ref('drivers/driver1');
    driverRef.on('value', (snapshot) => {
        const location = snapshot.val();
        setDriverLocation(location);
        });
        return () => {
            // Detén la escucha de cambios cuando el componente se desmonte
            driverRef.off();
          };
        }, []);

        return (
        <View style={{ flex: 1 }}>
        {driverLocation && (
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
        >
        <Marker
        coordinate={{
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
        }}
        title="Ubicación del conductor"
        />
        </MapView>
        )}
        </View>
        );
        };
        
        export default ClientScreen;