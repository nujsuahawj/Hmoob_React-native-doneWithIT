import React, { useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'

const AppSwitch = () => {
    const [tapped, setTapped] = useState(false)
    return (
        <View>
           <Switch value={tapped} onValueChange={()=>setTapped(!tapped)} />
        </View>
    )
}

export default AppSwitch

const styles = StyleSheet.create({})
