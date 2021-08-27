import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import Constants from "expo-constants";
import AppText from '../Components/AppText/AppText';
import { secondary } from '../Config/Color';
import ListItem from '../Components/ListItem/ListItem'

const ShoppingDetailScreen = ({route}) => {
    const item = route.params
    return (
        <View style={styles.screen}>
           <Image source={{uri: item.images[0].url}} style={styles.image} />
           <View style={styles.textContainer}>
               <AppText style={styles.textMain}>{item.title}</AppText>
               <Text style={styles.text}>${item.price}</Text>
           </View>
           <View>
               <ListItem  
                    description='5 Listings' 
                    title='Mohamed Youssef'
                    source={require('../../assets/user.png')}/>
           </View>
        </View>
    )
}

export default ShoppingDetailScreen


const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        width:'100%',

        
    },
    image:{
        width:'100%',
        height:300,
    },
    textContainer:{
        padding:20,
        margin:10,
    },
    textMain:{
        fontWeight: 'bold',

    },
    text:{
        color: secondary,
        marginTop:10,
        fontWeight: 'bold',
        fontSize:18,
    }
})
