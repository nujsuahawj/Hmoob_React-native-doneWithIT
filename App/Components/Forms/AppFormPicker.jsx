import React from 'react'
import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'
import { StyleSheet, View} from 'react-native'
import AppPicker from '../AppPicker/AppPicker'

const AppFormPicker = ({name, ...otherProps}) => {
    const { errors, setFieldValue,values, touched} = useFormikContext()
    return (
        <>
             <AppPicker 
                setSelectedItem={(item)=>setFieldValue(name, item)}
                {...otherProps}
                items={categories} 
                selectedItem={values[name]} 
            />
            <ErrorMessage isTouched={touched[name]} error={errors[name]}/>
        </>
    )
}

export default AppFormPicker

const styles = StyleSheet.create({})

const categories =[
    {label: 'Furniture', id:1, icon:'floor-lamp', color:'#fc5c6c'},
    {label: 'Cars', id:2, icon:'car', color:'#fd9644'},
    {label: 'Cameras', id:3, icon: 'camera', color:'#fed330'},
    {label: 'Games', id:4 , icon:'cards', color:'#26de81'},
    {label: 'Clothing', id:5, icon: 'shoe-heel', color:'#2bcbba'},
    {label: 'Sports', id:6 , icon:'basketball', color:'#45aaf2'},
    {label: 'Movies & Music', id:7 , icon:'headphones', color:'#4b7bec'},

]

