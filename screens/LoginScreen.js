import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from './firebaseconfig';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('UserScreen'); // Reemplaza 'Driver' por la pantalla correspondiente para el conductor
      })
      .catch(error => {
        // Manejo de errores de inicio de sesión
        console.log(error);
      });
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Password:</Text>
      <TextInput secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default LoginScreen;