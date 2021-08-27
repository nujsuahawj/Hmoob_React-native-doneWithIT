import React from 'react'
import { StyleSheet,Image,  View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import {secondary , primary, black} from '../Config/Color'
import { MaterialIcons } from '@expo/vector-icons';
export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} >
                <EvilIcons name="trash" size={45} color="white" />
            </View>
            <View style={styles.trashIcon} >
                <MaterialIcons name="cancel" size={35} color="white" />
            </View>
            <Image 
            style={styles.image}
            resizeMode='contain'
            source={require('../../assets/chair.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({

container:{
    backgroundColor: black,
    height:'100%',
    width:'100%'
},

closeIcon:{
    position:'absolute',
    top: 40,
    right:20,
  
},
trashIcon:{
    top: 40,
    left:20,
    position:'absolute',
},
image:{
    height: '100%',
    width: '100%',
}
})
