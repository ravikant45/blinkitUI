import { View, Text } from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import SplashScreen from '@features/auth/SplashScreen';
const Stack=createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
         <Stack.Navigator
         initialRouteName='SplashScreen'
         screenOptions={{
            headerShown:false
         }}
         >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
         </Stack.Navigator>
    </NavigationContainer>
  )
}