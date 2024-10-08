import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import CustomSafeAreaView from '@components/global/CustomSafeAreaView'
type Props = {}

const CustomerLogin = (props: Props) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
         <CustomSafeAreaView>
            <Text>adfjf</Text>
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