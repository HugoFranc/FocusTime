import React, {useState} from "react"
import {View, StyleSheet} from "react-native"
import {RoundedButton} from '../components/RoundedButton'

export const Timing = ({onChangeTime}) =>{

    return(
        <>
        
        <View>
            <RoundedButton style={styles.timingButton} size={75} title="10:00" onPress={() => onChangeTime(10)}/>
        </View>
           
        <View>
            <RoundedButton style={styles.timingButton} size={75} title="15:00" onPress={() => onChangeTime(15)}/>
        </View>
           
        <View>
            <RoundedButton style={styles.timingButton}size={75} title="20:00" onPress={() => onChangeTime(20)}/>
        </View>
        </>
      
    )
    
}

const styles = StyleSheet.create({
    timingButton:{
        flex: 0.2,
        alignItems: 'center',
        borderRadius: 10,
    }
})