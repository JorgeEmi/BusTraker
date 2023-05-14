import  React, {useState} from "react";
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native'
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { firebaseConfig } from "../firebaseconfig";
<></>
const CreateUserScreen = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState('')

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () =>{
        createUserWithEmailAndPassword(auth,email, password)
        .then(() =>{
            console.log('Cuenta creada')
            const user = userCredential.user;
            console.log(user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
  
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Name User"
            onChangeText={(text) => setName(text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Email User"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        
        <View>
            <Button
                title="Save User"
                onPress={handleCreateAccount}
            />
        </View>

      </ScrollView>
    )
  }
  
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
  
  export default CreateUserScreen;