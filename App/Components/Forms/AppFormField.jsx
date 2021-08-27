import { useFormikContext } from 'formik'
import React from 'react'
import ErrorMessage from './ErrorMessage'
import { StyleSheet, } from 'react-native'
import AppTextInput from '../AppInputs/AppTextInput'

const AppFormField = ({name, ...otherProps}) => {
    const {setFieldValue, values ,errors, setFieldTouched, touched} = useFormikContext()
    return (
        <>
            <AppTextInput 
                onChangeText={ (text) =>setFieldValue( name,text)}
                value={values[name]}
                onBlur={()=>setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorMessage isTouched={touched[name]} error={errors[name]}/>
        </>
    )
}

export default AppFormField

const styles = StyleSheet.create({})
