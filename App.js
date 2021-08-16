import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/login/LoginScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
         <Stack.Screen name = "Login" component = {LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
