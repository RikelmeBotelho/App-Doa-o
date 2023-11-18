import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Inicio  from './Screens/Inicio';
import Login from './Screens/Login';

  
const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Inicio" component={Inicio} />
      </Stack.Navigator>
    );
  }

  export default function App() {

    return (
      <NavigationContainer>

        <MyStack/>
      
      </NavigationContainer>
      
    );
    }