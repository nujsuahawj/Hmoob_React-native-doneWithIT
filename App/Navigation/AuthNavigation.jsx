import React from 'react'
import { StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import { primary } from '../Config/Color';


const AuthNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false, headerTintColor: primary}}>
            <Stack.Screen name='Welcome' component={HomeScreen} />
            <Stack.Screen 
            name='Login' 
            component={LoginScreen}
            options={{
                headerShown:true
            }} />
            <Stack.Screen 
            name='Register' 
            component={RegisterScreen}
            options={{
                headerShown:true
            }} />
        </Stack.Navigator>
    )
}

export default AuthNavigation

const styles = StyleSheet.create({})
