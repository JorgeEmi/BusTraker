import { firebaseConfig } from '../firebaseconfig';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const database = getDatabase();

const RouteForm = () => {
  const [num, setNum] = useState('');
  const [inicio, setInicio] = useState('');
  const [fin, setFin] = useState('');


  const handleSubmit = () => {
    push(ref(database, 'rutas'), {
      num: num,
      inicio: inicio,
      fin: fin,
    })
      .then(() => {
        console.log('Éxito');
      })
      .catch((error) => {
        console.log('Error al enviar los datos:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rutas</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Número de ruta"
        value={num}
        onChangeText={(text) => setNum(text)}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Inicio de ruta"
        value={inicio}
        onChangeText={(text) => setInicio(text)}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Fin de ruta"
        value={fin}
        onChangeText={(text) => setFin(text)}
      />
      <Button style={styles.button} title="Guardar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  button: {
    backgroundColor: 'skyblue',
    paddingTop: 15,
    paddingBottom: 15,
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 20,
  },
  textArea: {
    height: 60,
  },
});

export default RouteForm;