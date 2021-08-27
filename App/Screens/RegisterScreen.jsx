import React, { useContext, useState }  from 'react'
import {  StyleSheet, View } from 'react-native'
import Constants from "expo-constants";
import AppFormField from '../Components/Forms/AppFormField'
import * as Yup from 'yup'
import AppSubmitButton from '../Components/Forms/AppSubmitButton';
import AppForm from '../Components/Forms/AppForm';
import { white } from '../Config/Color';
import { Login, Register } from '../api/auth'
import AuthContext from '../auth/Context';
import { storeToken } from '../auth/Storage';



const RegisterScreen = () => {
   const {setUser} = useContext(AuthContext);
   const [error, setError] = useState()
    const validationSchema = Yup.object().shape({
        name: Yup.string().required().label('Name') ,
        email: Yup.string().required().email().label('Email') ,
        password: Yup.string().required().min(3).label('Password')
    })

    const handleSubmit = async(userInfo) =>{
        const result =  await Register(userInfo)
      
        setUser(result.data)
        storeToken(result)

        if(!result.ok){
            if (result.data) return setError(result.data.error)
            else{
                setError("An unexpected error")
                console.log(result);
            }
            return;
        }

        setUser(userInfo)
        storeToken(result)
    }

    return (
        <View style={styles.screen}>
            <AppForm
                initialValues={{email: '', password:'', name:''}}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                    <>
                    <AppFormField 
                            icon='person'
                            name='name'
                            placeholder='Name'
                            autoCapitalize='none'
                            autoCorrect
                            keyboardType='default'
                            textContentType='name'
                        />
                        <AppFormField 
                            icon='email'
                            name='email'
                            placeholder='Email Address'
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                        />
                        <AppFormField 
                            icon='lock'
                            placeholder='Password'
                            autoCapitalize='none'
                            autCorrect={false}
                            textContentType='password'
                            secureTextEntry
                            name='password'
                        />
                        <AppSubmitButton 
                            title='Register' 
                        />
                    </>
            </AppForm>
          
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        width:'100%',
        backgroundColor: white
    },
   
})
