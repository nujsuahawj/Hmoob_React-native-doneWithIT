import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShoppingScreen from '../Screens/ShoppingScreen';
import ListEditScreen from '../Screens/ListEditScreen';
import AccountScreen from '../Screens/AccountScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { primary } from '../Config/Color';
import TabIcon from '../Components/TabIcon/TabIcon';
import ShopNavigation from './ShopNavigation';
import AccountNavigation from './AccountNavigation';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: primary,
                inactiveTintColor:'gray'
            }}
        >
            <Tab.Screen 
                name='Feed'
                component={ShopNavigation}
                    options={{
                        tabBarIcon :({color, size})=>(
                            <MaterialIcons name="home" size={size} color={color} />
                        )
                    }}
                />
                 <Tab.Screen 
                    name='ListEdit'
                    component={ListEditScreen}
                    options={{
                        tabBarButton :()=>(
                            <TabIcon />
                        )
                    }} />
                 <Tab.Screen 
                    name='Account'
                    component={AccountNavigation} 
                    options={{
                        tabBarIcon :({color, size})=>(
                            <MaterialIcons name="person" size={size} color={color} />
                        )
                    }}/>
        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({})
