import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingScreen from '../Screens/ShoppingScreen';
import ShoppingDetailScreen from '../Screens/ShoppingDetailScreen';
import { primary } from '../Config/Color';

const ShopNavigation = () => {
    const Stack = createStackNavigator()
    return (
       <Stack.Navigator
            mode='modal'
            screenOptions={{
                headerTintColor:primary
            }}
       >
           <Stack.Screen name='Shopping' component={ShoppingScreen} options={{headerShown:false}}/>
           <Stack.Screen name='Shopping Details' component={ShoppingDetailScreen} />
       </Stack.Navigator>
    )
}

export default ShopNavigation

const styles = StyleSheet.create({})
