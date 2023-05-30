import { firebaseConfig } from '../firebaseconfig';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';



const app = initializeApp(firebaseConfig);
const database = getDatabase();

const ReportForm = () => {
  const [report, setReport] = useState('');


  const handleSubmit = () => {
    push(ref(database, 'reportes'), {
      report: report,
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
      <Text style={styles.title}>Reportes</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Reporte"
        value={report}
        onChangeText={(text) => setReport(text)}
      />
      <Button style={styles.button} title="Enviar" onPress={handleSubmit} />
      <Button style={styles.button} title="Reportes" onPress={() => navigation.navigate('ReportScreen')} />
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

export default ReportForm;