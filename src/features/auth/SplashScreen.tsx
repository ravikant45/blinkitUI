import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '@utils/Constants';
import { screenWidth } from '@utils/Scaling';
import Logo from '@assets/images/splash_logo.jpeg';
import GeoLocation from "@react-native-community/geolocation";
import { useAuthStore } from '@state/authStore';
import { tokenStorage } from '@state/storage';
import { resetAndNavigate } from '@utils/NavigationUtils';


GeoLocation.setRNConfiguration({
  skipPermissionRequests:false,
  authorizationLevel:'always',
  enableBackgroundLocationUpdates:true,
  locationProvider:'auto'
})


const SplashScreen = () => {
  const {user,setUser}=useAuthStore();

const tokenCheck=async()=>{
  const accessToken=tokenStorage.getString("accessToken");
  const refreshToken=tokenStorage.getString("refreshToken");


  if(accessToken){
         
  }
  resetAndNavigate("CustomerLogin");
  return false;
}

  useEffect(()=>{
   const fetchUserLocation=async()=>{
    try {
        GeoLocation.requestAuthorization();
        tokenCheck();
    } catch (error) {
      Alert.alert("Sorry we need your location to give you the better shopping experience") 
    }
   }

   const timeoutId=setTimeout(fetchUserLocation,1000);
   return ()=>clearTimeout(timeoutId);
  },[]);



  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logoImage} />
    </View>
  )
}

export default SplashScreen;

const styles=StyleSheet.create({
    container:{
        backgroundColor:Colors.primary,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logoImage:{
        width:screenWidth * 0.7,
        height:screenWidth * 0.7,
        resizeMode:"contain"
    }
})