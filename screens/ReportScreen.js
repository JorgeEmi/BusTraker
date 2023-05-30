import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { firebaseConfig } from '../firebaseconfig';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);

const ReportScreen = () => {
  const [reports, setReport] = useState([]);

  useEffect(() => {
    const obtenerReportes = () => {
      app
        .database()
        .ref('reportes')
        .on('value', (snapshot) => {
          if (snapshot.exists()) {
            const Reportes = snapshot.val();
            const datosArray = Object.values(Reportes);
            setReport(datosArray);
          }
        });
    };

    obtenerReportes();
  }, []);

  return (
    <View>
      {reports.map((item, index) => (
        <Text key={index}>{item.report}</Text>
      ))}
        <Button style={styles.button} title="Nuevo" onPress={() => navigation.navigate('ReportForm')} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'skyblue',
    paddingTop: 15,
    paddingBottom: 15,
  },
});

export default ReportScreen;
