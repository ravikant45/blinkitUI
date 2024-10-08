import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import SplashScreen from '@features/auth/SplashScreen';
import { navigationRef } from '@utils/NavigationUtils';
import CustomerLogin from '@features/auth/CustomerLogin';
import DeliveryLogin from '@features/auth/DeliveryLogin';
const Stack=createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
         <Stack.Navigator
         initialRouteName='SplashScreen'
         screenOptions={{
            headerShown:false
         }}
         >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen
            options={{
              animation:'fade'
            }}
            name="CustomerLogin"
            component={CustomerLogin} />
            <Stack.Screen
              options={{
                animation:'fade'
              }}
            name='DeliveryLogin'
            component={DeliveryLogin} />

         </Stack.Navigator>
    </NavigationContainer>
  )
}