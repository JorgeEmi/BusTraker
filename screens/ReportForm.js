import React, { Component } from "react";
import {TextInput, TouchableHighlight, Alert} from 'react-native'
import firebase from '../database/firebase'
import { Alert } from "react-native-web";

export default class Reportes extends Component{
  constructor(){
    super()

    this.state ={
      comment: ''
    }
  }
  changeComment(comment){
    this.setState({comment})
  }

  buttonPressed = async() => {
    if(this.state.comment){
      await firebase.db.collection('reportes').add({
        comment  : this.state.comment
      })
      props.navigation.navigate('ReportScreen')
    }else{
      Alert.alert('Error')
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Reportes</Text>
          <TextInput
          multiline={true}
          style={[styles.input, styles.textArea]}
          placeholder="Reporte"
          value={this.state.comment}
          onChangeText={(title) => this.changeComment(comment)}
          />
          <TouchableHighlight style={styles.button}
          onPress={() => this.buttonPressed()}>
            <Text style={styles.textButton}>Enviar</Text>
          </TouchableHighlight>
        </View>
        </View>
    );
  }
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
  textButton:{
    textAlign: 'center',
    color: 'white'
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