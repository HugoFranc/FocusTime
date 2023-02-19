import React, { useState } from "react";
import { useKeepAwake } from 'expo-keep-awake';
import { View, Text, StyleSheet, Vibration } from 'react-native'
import { ProgressBar } from 'react-native-paper';
import { CountDown } from "../components/CountDown";
import { RoundedButton } from '../components/RoundedButton'
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";
import { Timing } from "../components/Timing";


const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
]


export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
    useKeepAwake();
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.5)

    const onEnd = () => {
        Vibration.vibrate(PATTERN);
        setIsStarted(false);
        setProgress(1);
        onTimerEnd(focusSubject);
    }


    return (

        <View style={styles.container}>


            <View style={styles.countDown}>
                <CountDown minutes={minutes} isPaused={!isStarted} onProgress={setProgress} onEnd={onEnd} />

                <View style={styles.progressBar}>
                    <ProgressBar color={colors.turquoise} progress={progress} style={{ height: spacing.xs, }} />
                </View>

                <View style={{ paddingTop: spacing.lg }}>
                    <Text style={styles.title}> Focusing on:  </Text>
                    <Text style={styles.subTitle}> {focusSubject} </Text>
                </View>

            </View>

            <View style={styles.buttons}>

                <View style={styles.timerWrapper}>
                    <Timing onChangeTime={setMinutes} />
                </View>

                <View style={styles.buttonWrapper}>

                    <RoundedButton title="Cancel" onPress={clearSubject} size={80}  style={!isStarted ? styles.restartButton : styles.restartButtonGlow}  />

                    {!isStarted && (
                        <RoundedButton title="Start" onPress={() => setIsStarted(true)} size={80} style={styles.startButton} textStyle={styles.startPauseButtonText} />
                    )}
                    {isStarted && (
                        <RoundedButton title="Pause" onPress={() => setIsStarted(false)} size={80} style={styles.pauseButton} textStyle={styles.startPauseButtonText} />
                    )}
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    progressBar: {
        width: '100%'
    },

    countDown: {
        paddingTop: spacing.xxl,
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flex: 1,
    },

    buttonWrapper: {
        flex: 0.4,
        flexDirection: 'row',
        gap: 200,
        paddingTop: spacing.xl,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    timerWrapper: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 60,
        flexDirection: 'row'
    },


    startButton : {
        backgroundColor: colors.turquoise,
        borderColor: colors.black,
        opacity: 0.9,
    },

    pauseButton: {
        backgroundColor: colors.coral,
        borderColor: colors.black,
        opacity: 0.8,
    },


    restartButton: {
        backgroundColor: colors.lightGrey,
        borderColor: colors.white,
        opacity: 0.3,
    },

    restartButtonGlow:{
        backgroundColor: colors.lightGrey,
        borderColor: colors.white,
        opacity: 0.8,
    },

    startPauseButtonText: {
        color: colors.black
    },





    title: {
        color: colors.white,
        fontWeight: '500',
        textAlign: 'center',
        fontSize: fontSizes.lg
    },
    subTitle: {

        color: colors.lighterGrey,
        fontSize: fontSizes.md,
        textAlign: 'center',
        paddingTop: spacing.sm
    }
})

export default Timer;