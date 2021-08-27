import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode'

const key= 'authToken'

export const storeToken = async authToken =>{
    try {
        await SecureStore.setItemAsync(key, authToken)
    } catch (error) {
        console.log('Error storing the Token', error)
    }
}


const getToken = async () =>{
    try {
        return await SecureStore.getItemAsync(key)
    } catch (error) {
        console.log('Error getting the Token', error)
    }
}

export const getUser = async() =>{
    const token = await getToken()
    return token ? jwtDecode(token) : null;
}

export const removeToken = async () =>{
    try {
        await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log('Error Removing the Token', error)
    }
}