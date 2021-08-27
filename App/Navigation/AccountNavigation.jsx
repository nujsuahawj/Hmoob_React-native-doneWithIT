import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import { primary } from '../Config/Color';
import AccountScreen from '../Screens/AccountScreen';
import MessagesScreen from '../Screens/MessagesScreen'

const AccountNavigation = () => {
    const Stack = createStackNavigator()
    return (
       <Stack.Navigator
            mode='modal'
            screenOptions={{
                headerTintColor:primary
            }}
       >
           <Stack.Screen name='My Account' component={AccountScreen} />
           <Stack.Screen name='Messages' component={MessagesScreen} />
       </Stack.Navigator>
    )
}

export default AccountNavigation

const styles = StyleSheet.create({})
