import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from "expo-constants";
import { FlatList } from 'react-native-gesture-handler';
import { lightGray, primary, secondary } from '../Config/Color';
import ListIcon from '../Components/ListItem/ListIcon';
import ListItem from '../Components/ListItem/ListItem';
import AppSeparator from '../Components/ListItem/AppSeparator';
import AuthContext from '../auth/Context';
import { removeToken } from '../auth/Storage';


const AccountScreen = ({navigation}) => {

    const {setUser, user : {name, email}} = useContext(AuthContext);

    const handleLogout = () =>{
        setUser(null);
        removeToken();
    }
    
    return (
        <View style={styles.screen}>
            <View style={styles.listItem}>
                <ListItem 
                    source={require('../../assets/user.png')} 
                    title={name} 
                    description={email}/>
            </View>
            <View>
                <FlatList
                    data={icons}
                    keyExtractor={icons => icons.id.toString()}
                    ItemSeparatorComponent={()=> <AppSeparator />}
                    renderItem={({item})=>
                        <ListIcon  
                            title={item.title}
                            color={item.color}
                            icon={item.icon}
                            onPress={()=>navigation.navigate(item.targetScreen)}
                        />
                    }
                />
                <View style={styles.listIcon}>
                        <ListIcon 
                            onPress={handleLogout} 
                            title='Logout' 
                            icon='logout' 
                            color='gold'/>
                </View>
            </View>
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        width:'100%',
        backgroundColor:lightGray
    },
    listItem:{
        marginBottom: 50,
    },
    listIcon:{
        marginTop: 20,
    }
})

const icons=[
    {
        id: 1,
        color: primary,
        title: 'My Listings',
        icon: 'format-list-bulleted',
        // source: require('../../assets/user.png')
    },
    {

        id: 2,
        color: secondary,
        title: 'Messages',
        icon: 'email',
        targetScreen: 'Messages',
        // source: require('../../assets/user.png')
    }
]