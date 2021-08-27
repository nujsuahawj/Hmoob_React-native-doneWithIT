import React from 'react'
import { StyleSheet, TouchableOpacity, View , Text} from 'react-native'
import AppText from '../AppText/AppText'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { black } from '../../Config/Color';

const PickerItem = ({label, color, icon ,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, {backgroundColor:color}]}>
                <MaterialCommunityIcons name={icon} size={30} color="white" />
                <AppText style={styles.text}>{label}</AppText>
            </View>
           
        </TouchableOpacity>
    )
}

export default PickerItem

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f4f4',
        width: '89%',
        alignSelf:'center',
        borderRadius:25,
        alignItems:'center',
        padding: 10,
        flexDirection:'row',
        marginTop:25,
        
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    text:{
        marginHorizontal:10,
     
    }

})
