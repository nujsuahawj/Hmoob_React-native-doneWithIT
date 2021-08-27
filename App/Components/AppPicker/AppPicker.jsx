import React, { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import { black, lightGray } from '../../Config/Color'
import { Entypo } from '@expo/vector-icons';
import AppText from '../AppText/AppText';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';

const AppPicker = ({ items,selectedItem,setSelectedItem }) => {
    const[modalVisible, setModalVisible]= useState(false)
    return (
        <>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
            <View style={styles.container}>  
                <Entypo name="list" size={24} color="gray" />
                <AppText style={styles.text}>
                    {selectedItem? selectedItem.label :'Category'}
                </AppText>
                <Entypo name="chevron-down" size={24} color="gray" />
            </View>
        </TouchableWithoutFeedback>
        <Modal
            animationType="slide"
            visible={modalVisible}
        >
            <View style={styles.modalContainer}>
                <Button title='close' onPress={()=>setModalVisible(false)} />
                <FlatList 
                    style={styles.listContainer}
                    data={items}
                    keyExtractor={items => items.id.toString()}
                    renderItem={({item})=> <PickerItem
                        label={item.label} 
                        color={item.color} 
                        icon={item.icon} 
                        onPress={ ()=>{
                            setModalVisible(false)
                            setSelectedItem(item)
                        }} 
                        />
                    }
                />
            </View>
            
        </Modal>
        </>
       
    )
}

export default AppPicker

const styles = StyleSheet.create({
    container:{
        width:'95%',
        marginLeft: 5,
        backgroundColor: lightGray,
        height:50,
        borderRadius:25,
        padding:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
    },
    text:{
        flex:1,
        marginLeft:10,
    },
    modalContainer:{
        marginTop:30,
        flex: 1,
    },
    listContainer:{
    
        flex:1
    }
})
