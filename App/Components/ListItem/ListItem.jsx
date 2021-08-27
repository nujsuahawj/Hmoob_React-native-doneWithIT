import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { white } from '../../Config/Color'
import AppText from '../AppText/AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItem = ({description, title,source, renderRightActions}) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableOpacity style={styles.container}>
                <Image 
                source={source}
                resizeMode='contain'
                style={styles.image} />
                <View style={styles.textContainer}>
                    <AppText>{title}</AppText>
                    <Text style={styles.text}>{description}</Text>
                </View>
            </TouchableOpacity>
        </Swipeable>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container:{
      
        backgroundColor: white,
        width: '100%',
        height: 85,
        flexDirection:'row',
        alignItems: 'center',
    },
    image:{
        height:70,
        width:70,
        borderRadius: 35,
        marginHorizontal:20,
    },
    text:{
        color: 'gray',
        marginTop:6,
    }
})
