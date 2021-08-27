import React, { useState } from 'react';
import {  StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import jwtDecode from 'jwt-decode'
import TabNavigation from './App/Navigation/TabNavigation';
import AuthNavigation from './App/Navigation/AuthNavigation'
import AuthContext from './App/auth/Context';
import {getUser } from './App/auth/Storage';
import { AppLoading } from 'expo';

export default function App() {

  const [isReady, setIsReady] = useState(false)
  const [user,setUser] = useState()

  const restoreToken = async () =>{
    const user = await getUser()
    setUser(user);
  }

  if (!isReady) 
      return <AppLoading startAsync={restoreToken} onFinish={()=> setIsReady(true)} />


  return (
      <AuthContext.Provider value={{user, setUser}}>
        <NavigationContainer>
         { !user? <AuthNavigation /> : <TabNavigation />}
        </NavigationContainer>
      </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({ 
  container: {
    // flex:1,
    // marginTop:50,
    // backgroundColor:'#f4f4',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
