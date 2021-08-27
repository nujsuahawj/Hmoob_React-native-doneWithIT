import React, { useState } from 'react'
import {  StyleSheet, View } from 'react-native'
import Constants from "expo-constants";
import AppFormField from '../Components/Forms/AppFormField'
import * as Yup from 'yup'
import AppSubmitButton from '../Components/Forms/AppSubmitButton';
import AppForm from '../Components/Forms/AppForm';
import AppFormPicker from '../Components/Forms/AppFormPicker';
import AppFormImage from '../Components/ImageInput/AppFormImage';
import UseLocation from '../Hooks/UseLocation';
import { white } from '../Config/Color';
import { AddListings } from '../api/listings';
import UploadScreen from '../Components/UploadScreen/UploadScreen';



const ListEditScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [progress, setProgress] = useState()
    let location = UseLocation();

    const validationSchema = Yup.object().shape({
        title: Yup.string().required().label('Title') ,
        price: Yup.number().required().label('Price'),
        category: Yup.string().required().nullable().label('Category') ,
        description: Yup.string().required().min(12).label('Description'),
        images: Yup.array().min(1, 'At least insert one image')
        
    })
   
   

    const handleSubmit =  async (listings, {resetForm}) => {

        setProgress(0);
        setModalVisible(true)
        listings.location= location;
       const result = await AddListings(listings,
        (progress)=> setProgress(progress))
   
       if (!result.ok)
       {
            setModalVisible(false)
           return alert("couldn't send the data to the server")
       }
       resetForm()
    }


    return (
        <View style={styles.screen}>
            <UploadScreen progress={progress} visible={modalVisible} onDone={()=>setModalVisible(false)}/>
            <AppForm
                initialValues={{title: '', price: '',description:'',category: null, images:[]}}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                    <>
                        <View style={{height:150,}}>
                        <AppFormImage name='images' />
                        </View>
                        
                        <AppFormField  name='title' placeholder='Title'/>
                        <View style={styles.priceContainer}>
                        <AppFormField 
                            name='price'
                            placeholder='Price'
                            autoCorrect
                            keyboardType='numeric'
                        />
                        </View>
                        <View style={styles.pickerContainer} >
                            <AppFormPicker   name='category'  placeholder='Category'/>
                        </View>
                        
                        <AppFormField 
                            name='description'
                            placeholder='Description'
                            autoCorrect
                            keyboardType='default'
                            multiline
                            numberOfLines={3}
                        />
                        <AppSubmitButton 
                            title='Post' 
                        />
                    </>
            </AppForm>
          
        </View>
    )
}

export default ListEditScreen

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        width:'100%',
        backgroundColor:white
    },
    pickerContainer:{
        width: '60%'
    },
    priceContainer:{
        width: '35%',
    }
   
})
