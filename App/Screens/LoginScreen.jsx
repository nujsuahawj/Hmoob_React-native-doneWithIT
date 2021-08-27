import React, { useContext, useState }  from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Constants from "expo-constants";
import AppFormField from '../Components/Forms/AppFormField'
import * as Yup from 'yup'
import AppSubmitButton from '../Components/Forms/AppSubmitButton';
import AppForm from '../Components/Forms/AppForm';
import ErrorMessage from '../Components/Forms/ErrorMessage'
import { Login } from '../api/auth'
import { white } from '../Config/Color';
import jwtDecode from 'jwt-decode'
import AuthContext from '../auth/Context';
import { storeToken } from '../auth/Storage';


const LoginScreen = () => {

    const [loginFailed, setLoginFailed] = useState(false)
    
    const authContext = useContext(AuthContext)

    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label('Email') ,
        password: Yup.string().required().min(3).label('Password')
    })

    const handleSubmit = async({email, password}) =>{
        const result =  await Login(email, password)
        if(!result.ok) return setLoginFailed(true);

        setLoginFailed(false)
        const user = jwtDecode(result.data);
        console.log(user);
        authContext.setUser(user)
        storeToken(result.data)
    }

    return (
        <View style={styles.screen}>
            <Image 
            style={styles.logo}
            source={require('../../assets/logo-red.png')} />
            <AppForm
                initialValues={{email: '', password:''}}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                    <>
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
                            autoCorrect={false}
                            textContentType='password'
                            secureTextEntry
                            name='password'
                        />
                        <ErrorMessage error='Invalid email or/and password' isTouched={loginFailed} />
                        <AppSubmitButton 
                            title='Login' 
                        />
                    </>
            </AppForm>
          
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        backgroundColor:white,
        width:'100%',
    },
    logo:{
        width: 90,
        height:90,
        alignSelf:'center',
        marginBottom: 20,
        marginTop:70,
        
    }
})
