
import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import AppButton from '../Components/AppButton/AppButton';
import { secondary } from '../Config/Color';

export default function HomeScreen({navigation}) {
    return (
      <ImageBackground 
        source={require('../../assets/background.jpg')} 
        style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/logo-red.png')} /> 
                <Text style={styles.text}>Sell your old product here</Text>
            </View>
            <View style={styles.btnContainer}>
                <AppButton title='Login' onPress={()=> navigation.navigate('Login')}/>
                <AppButton color={secondary} title='Register' onPress={()=> navigation.navigate('Register')}/>
            </View>
          
           
      </ImageBackground>

    )
}
const styles = StyleSheet.create({ 
    background:{
        // flex:1,
        height:'100%',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logoContainer:{
        position: 'absolute',
        top:100,
        alignItems:'center'
    },
    logo:{
        height:100,
        width:100,
        marginBottom:20
    },
    text:{
       textAlign:'center'
    },
    btnContainer:{
        padding:20,
        width:'100%'
    }
  });