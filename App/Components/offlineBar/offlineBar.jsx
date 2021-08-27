import React from 'react'
import { StyleSheet, View } from 'react-native'
import {  primary, white } from '../../Config/Color'
import AppText from '../AppText/AppText'

const OfflineBar = () => {
    return (
        <View style={styles.container}> 
            <AppText style={styles.text}>No Internet Connection</AppText>
        </View>
    )
}

export default OfflineBar

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        width:'100%',
        height: 40,
        position:'absolute',
        zIndex:100,
        backgroundColor: primary,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color : white,
        fontWeight: 'bold'
    }
})
