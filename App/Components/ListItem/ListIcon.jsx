import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from '../AppText/AppText';
import { primary, white } from '../../Config/Color';


const ListIcon = ({icon, title, onPress, color='primary'}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={[styles.iconContainer, {backgroundColor:color}]}>
                    <MaterialCommunityIcons name={icon} size={24} color="white" />
                </View>
                <AppText>{title}</AppText>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ListIcon

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        width:'100%',
        backgroundColor: white,
        padding:10,
    },
    iconContainer:{
        height: 40,
        width:40,
        borderRadius: 20,
        backgroundColor: primary,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginRight:20,
    }
})
