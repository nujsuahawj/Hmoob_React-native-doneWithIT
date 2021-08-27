import { useEffect,useState } from "react";
import * as Location from 'expo-location'; 

const UseLocation = () =>{
    const [location, setLocation] = useState(null);

    const getLocation = async()=>{
        try {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') return;
            let {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync({});
            setLocation({latitude,longitude});
        } catch (error) {
            console.log(error);
        }
    } 
  
   useEffect(()=>{
        getLocation()
   },[])

   return location;
   
}
export default UseLocation