import { View, Text, StyleSheet, Animated } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler'
import CustomSafeAreaView from '@components/global/CustomSafeAreaView'
import ProductSlider from '@components/login/ProductSlider'
type Props = {}

const CustomerLogin = (props: Props) => {

  const handleGesture=({nativeEvent}:any)=>{
       if(nativeEvent.state === State.END){
        const {translationX, translationY}=nativeEvent;
         let direction='';
         if(Math.abs(translationX)>Math.abs(translationY)){
               direction=translationX>0 ? 'right':'left';
         }else{
               direction=translationY>0 ? 'down':'up';
         }

          const newSequence=[]
 


       }
  } 
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
         <CustomSafeAreaView>
           <ProductSlider />
           <PanGestureHandler onHandlerStateChange={handleGesture}>
            <Animated.ScrollView>

            </Animated.ScrollView>
           </PanGestureHandler>
         </CustomSafeAreaView>
      </View>
    </GestureHandlerRootView>
  )
}

export default CustomerLogin;

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})