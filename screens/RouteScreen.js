import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import firebase from '../firebaseconfig';

const RouteScreen = () => {
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    const obtenerRutas = () => {
      firebase
        .database()
        .ref('rutas')
        .on('value', (snapshot) => {
          if (snapshot.exists()) {
            const Rutas = snapshot.val();
            const datosArray = Object.values(Rutas);
            setRutas(datosArray);
          }
        });
    };

    obtenerRutas();
  }, []);

  return (
    <View>
      {rutas.map((item, index) => (
        <Text key={index}>{item.numero}</Text>,
        <Text key={index}>{item.inicio}</Text>,
        <Text key={index}>{item.fin}</Text>
      ))}
    </View>
  );
};

export default RouteScreen;