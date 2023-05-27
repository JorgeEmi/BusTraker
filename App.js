import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import * as Permissions from "expo-permissions";
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

import DriverScreen from './screens/DriverScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ReportForm from './screens/ReportForm';
import ReportScreen from './screens/ReportScreen';
import RouteForm from './screens/RouteForm';
import RouteScreen from './screens/RouteScreen';
import UserScreen from './screens/UserScreen';

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen component={LoginScreen}/>
      <Stack.Screen component={DriverScreen}/>
      <Stack.Screen component={RegisterScreen}/>
      <Stack.Screen component={ReportForm}/>
      <Stack.Screen component={ReportScreen}/>
      <Stack.Screen component={RouteForm}/>
      <Stack.Screen component={RouteScreen}/>
      <Stack.Screen component={UserScreen}/>
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

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

const getToken = async () => {
  const{status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if(status !== 'granted'){
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync();
  console.log(token);

  return token;
};

export default class Apps extends React.Component{
  componentDidMount(){
    getToken();
  }
  render(){
    return{

    }
  }
}
