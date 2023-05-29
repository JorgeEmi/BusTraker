import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from '../firebaseconfig';

const ReportForm = () => {
  const [comment, setComment] = useState('');

  const enviarReporte = () => {
    firebase.firestore().collection('reportes').add({
      comment: comment,
    })
    .then(() => {
      console.log('Datos guardados correctamente');
      
    })
    .catch((error) => {
      console.log('Error al guardar los datos: ', error);
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Reporte"
        value={comment}
        onChangeText={setComment}
      />
      <Button title="Enviar" onPress={enviarReporte} />
    </View>
  );
};

export default ReportForm;

