import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import * as Progress from 'react-native-progress';
import { primary } from '../../Config/Color';
import LottieView from 'lottie-react-native'

const UploadScreen = ({progress, onDone , visible}) => {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {
                    progress <1?
                    <Progress.Bar progress={progress} color={primary} width={200} /> :
                    <LottieView 
                        source={require('../../../assets/animation/done.json')}
                        loop={false}
                        autoPlay
                        style={styles.animation}
                        onAnimationFinish={onDone}/>
                }
                
            </View>
        </Modal>
    )
}

export default UploadScreen

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    animation:{
        width: 150,
    }
})
