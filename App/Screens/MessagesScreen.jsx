import React, { useState } from 'react'
import ListItem from '../Components/ListItem/ListItem'
import Constants from "expo-constants";
import { FlatList, StyleSheet, View,  } from 'react-native'
import AppSeparator from '../Components/ListItem/AppSeparator';
import ListItemDelete from '../Components/ListItem/ListItemDelete';

const MessagesScreen = () => {
    const [messages, setMessages]= useState(initialValues)
    const handleDeleteMessage= DeletedMessage =>
        setMessages( messages
            .filter(message =>message.id !== DeletedMessage.id))
    return (
        <View  style={styles.container}>
            <FlatList 
                data={messages}
                keyExtractor={messages => messages.id.toString()}
                ItemSeparatorComponent={()=><AppSeparator />}
                renderItem={({item})=>
                <ListItem
                    title={item.title} 
                    description={item.description} 
                    source={item.source}
                    renderRightActions={()=> <ListItemDelete onPress={()=>handleDeleteMessage(item)} />}
                />
            }
            />
        </View>
    )
}

export default MessagesScreen

const styles = StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        width:'100%'
    },
    
})

const initialValues =[
    {
        id:1,
        title: 'Mohamed Youssef',
        description: 'D1',
        source: require('../../assets/user.png')
    },
    {
        id:2,
        title: 'Mohamed Ahmed',
        description: 'D2',
        source: require('../../assets/user.png')
    }
]