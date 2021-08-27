import { Formik } from 'formik'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AppForm = ({initialValues,validationSchema, children, onSubmit}) => {
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
       {({})=>(
           <>
            {children}
           </>
       )}
    </Formik>
    )
}

export default AppForm

const styles = StyleSheet.create({})
