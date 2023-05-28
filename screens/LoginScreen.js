import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../firebaseconfig';
import {firebaseConfig} from '../firebaseconfig';
import UserScreen from './UserScreen';
import DriverScreen from './DriverScreen';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Redireccionar a la pantalla correspondiente según el tipo de usuario
        const user = auth.currentUser;
        if (user) {
          if (user.isDriver) {
            navigation.navigate('DriverScreen');
          } else {
            navigation.navigate('UserScreen');
          }
        }
        console.log("exito");
        setMessage('Inicio de sesión exitoso');
      })
      .catch(error => {
        setMessage('Contraseña incorrecta');
        // Manejo de errores de inicio de sesión
        console.log(error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View>
        <Button title="Login" onPress={handleLogin} />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      <View>
        <Text>{message}</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1
  }
});

export default LoginScreen;