import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import firebase from '../firebaseconfig';

const ReportScreen = () => {
  const [reports, setReport] = useState([]);

  const changeScreen = () => {
    navigation.navigate('ReportForm');
  };

  useEffect(() => {
    const obtenerReportes = () => {
      firebase
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
       <Button title="Nuevo" onPress={changeScreen} />
    </View>
  );
};

export default ReportScreen;
