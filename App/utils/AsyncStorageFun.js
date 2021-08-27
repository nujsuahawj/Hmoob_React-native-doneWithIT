import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment'

const prefix ='cache';
const TimeInMins = 5;

export const storeDataToStorage = async (key, value) =>{
    
    try {
        const item ={
            value,
            timestamp :Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
        
    } catch (error) {
        console.log(error)
    }
}

const isExpired = item =>{
    const now = moment(Date.now())
    const storedItemTime = moment(item.timestamp) 
    const isExpired = now.diff(storedItemTime , 'minutes') > TimeInMins;
    return isExpired;
}


export const getDataFromStorage = async key =>{
    try {
        const value = await AsyncStorage.getItem(prefix + key)
        const item = JSON.parse(value);

        if(!item) return;

        if (isExpired(item)){
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }
        
    } catch (error) {
        console.log(error)
    }

}