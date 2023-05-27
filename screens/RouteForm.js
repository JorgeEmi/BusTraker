import React, { Component, useState} from "react";
import {TextInput, TouchableHighlight, Alert} from 'react-native'
import firebase from '../database/firebase'
import { Alert } from "react-native-elements";
import { ScrollView } from "react-native-web";

const RouteForm = () =>{

    const[state, setState] = useState({
        numero: '',
        inicio: '',
        fin: '',
        precio: ''
    })

    const handleChangeText = (numero, value) => {
        setState({...state, [numero]: value});
    };

    buttonPressed = async() => {
        if(this.state.comment){
          await firebase.db.collection('rutas').add({
            numero  : state.numero,
            inicio  : state.inicio,
            fin  : state.fin,
            precio  : state.precio
          })
          props.navigation.navigate('RouteScreen')
        }else{
          Alert.alert('Error')
        }
      }
  
    return(
        <ScrollView style={styles.container}>
            <View style={styles.input}>
                <TextInput placeholder="Numero de Ruta"
                onChangeText={(value) => handleChangeText('numero', value)}/>
            </View>
            <View style={styles.input}>
                <TextInput placeholder="Inicio de Ruta"
                onChangeText={(value) => handleChangeText('inicio', value)}/>
            </View>
            <View style={styles.input}>
                <TextInput placeholder="Final de Ruta"
                onChangeText={(value) => handleChangeText('fin', value)}/>
            </View>
            <View style={styles.input}>
                <TextInput placeholder="Precio"
                onChangeText={(value) => handleChangeText('precio', value)}/>
            </View>
            <TouchableHighlight style={styles.button}
                onPress={() => this.buttonPressed()}>
                <Text style={styles.textButton}>Guardar</Text>
          </TouchableHighlight>
        </ScrollView>
    );
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop:30,
    paddingLeft: 15,
    paddingRight: 15
  },
  button:{
    backgroundColor: 'skyblue',
    paddingTop: 15,
    paddingBottom: 15
  },
  title:{
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5
  },
  input:{
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 20
  },
  textArea:{
    height: 60
  }
});