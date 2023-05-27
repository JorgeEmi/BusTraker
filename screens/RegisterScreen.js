import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from '../firebaseconfig';


const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Registro exitoso, puedes redirigir a la pantalla de inicio de sesión
        navigation.navigate('Login');
      })
      .catch(error => {
        // Manejo de errores de registro
        console.log(error);
      });
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Password:</Text>
      <TextInput secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default RegisterScreen;