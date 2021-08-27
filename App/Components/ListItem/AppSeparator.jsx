import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { lightGray } from '../../Config/Color'

const AppSeparator = () => {
    return (
        <View style={styles.separator}/>
    )
}

export default AppSeparator

const styles = StyleSheet.create({
    separator:{
        width:'100%',
        height:2,
        backgroundColor: lightGray,
    }
})
