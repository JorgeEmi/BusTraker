import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {firebaseConfig} from '../firebaseconfig';


const RegisterScreen = ({ navigation }) => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')
  const [isDriver, setIsDriver] = useState(false);
  const [message, setMessage] = useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            setMessage('Registrado correctamente');
            console.log('Cuenta creada')
            const user = userCredential.user;
            console.log(user)
        })
        .catch(error =>{
          setMessage('Correo ya en uso');
            console.log(error)
        })
    }

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
  
        <View style={styles.inputGroup}>
          <Text>¿Eres conductor?</Text>
          <Button
            title={isDriver ? 'Sí' : 'No'}
            onPress={() => setIsDriver(!isDriver)}
          />
        </View>
  
        <View>
          <Button title="Register" onPress={handleRegister} />
          <Button
            title="Login"
            onPress={() => navigation.navigate('Login')}
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
})

export default RegisterScreen;