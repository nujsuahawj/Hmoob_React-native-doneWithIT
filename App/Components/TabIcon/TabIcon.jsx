import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { primary, white } from '../../Config/Color';

import { useNavigation } from '@react-navigation/native';


const TabIcon = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('ListEdit')}>
            <View style={styles.mainContainer}>
                <View style={styles.subContainer}>
                    <AntDesign name="plus" size={24} color={primary} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default TabIcon

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: primary,
        height:60,
        bottom:12,
        width:60,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
      
    },
    subContainer:{
        backgroundColor: white,
        height:35,
        width:35,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    }
})
