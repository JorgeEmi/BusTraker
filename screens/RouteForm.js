import firebase from './firebaseConfig'
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from '../firebaseconfig';

const RouteForm = () => {
    const [numero, setNum] = useState('');
    const [inicio, setStart] = useState('');
    const [fin, setEnd] = useState('');

    const handleSubmit = () => {
        firebase
          .database()
          .ref('rutas')
          .push({
            numero,
            inicio,
            fin,
          })
          .then(() => {
            console.log('Éxito')
          })
          .catch((error) => {
     
            console.log('Error al enviar los datos:', error);
          });
      }; 
    return (
      <View>
        <TextInput
          placeholder="Número de ruta"
          value={numero}
          onChangeText={(text) => setNum(text)}
        />
         <TextInput
          placeholder="Inicio de ruta"
          value={inicio}
          onChangeText={(text) => setStart(text)}
        />
         <TextInput
          placeholder="Final de ruta"
          value={fin}
          onChangeText={(text) => setEnd(text)}
        />
        <Button title="Guardar" onPress={handleSubmit} />
      </View>
    );
  };
  
  export default RouteForm;