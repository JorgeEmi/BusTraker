import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CreateUserScreen from './screens/CreateUserScreen';
import Inicio from './screens/Inicio';
import Geolocalizacion from './screens/Geolocalizacion'

 const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Geolocalizacion"component={Geolocalizacion}/>
      <Stack.Screen name="CreateUserScreen"component={CreateUserScreen}/>
      <Stack.Screen name="Inicio" component={Inicio}/>
    </Stack.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
