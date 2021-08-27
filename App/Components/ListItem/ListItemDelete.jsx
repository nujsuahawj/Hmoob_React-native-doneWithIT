import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import {danger} from '../../Config/Color'

const ListItemDelete = ({onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.swipe}>
                <EvilIcons name="trash" size={50} color="white" />
            </View>
        </TouchableWithoutFeedback>
      
    )
}

export default ListItemDelete

const styles = StyleSheet.create({
    swipe:{
        height:'100%', 
        width:70, 
        backgroundColor: danger,
        display: 'flex',
        alignItems:'center',
        justifyContent:'center'
        
    }
})
