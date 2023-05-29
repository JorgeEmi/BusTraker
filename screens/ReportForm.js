import firebase from '../firebaseconfig';
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const ReportForm = () => {
    const [report, setReport] = useState('');
  
    const handleSubmit = () => {
        firebase
          .database()
          .ref('reportes')
          .push({
            report,
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
          placeholder="Reporte"
          value={report}
          onChangeText={(text) => setReport(text)}
        />
        <Button title="Enviar" onPress={handleSubmit} />
      </View>
    );
  };
  
  export default ReportForm;
