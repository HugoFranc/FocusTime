import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from 'react-native';
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

const minutesToMiliseconds = (min) => min * 60_000;
const formatTime = (time) => (time < 10 ? `0${time}` : `${time}`);



export const CountDown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => {
    const interval = React.useRef(null);

    const [miliseconds, setMiliseconds] = useState(null);


    const countDown = () => {
        setMiliseconds((time) => {
            if (time === 0) {
                clearInterval(interval.current);
                onEnd();
                return time;
            }
            const timeLeft = time - 1000;
            return timeLeft;
        });
    }

    useEffect(() => {
        setMiliseconds(minutesToMiliseconds(minutes))
    }, [minutes]);

    useEffect(() => {
        onProgress(miliseconds / minutesToMiliseconds(minutes))
    }, [miliseconds]);

    useEffect(() => {
        if (isPaused) {
            if (interval.current) clearInterval(interval.current);
            return;
        }

        interval.current = setInterval(countDown, 1000);

        return () => clearInterval(interval.current)
    }, [isPaused]);

    const minute = Math.floor(miliseconds / 60_000) % 60;
    const seconds = Math.floor(miliseconds / 1000) % 60;

    return (
        <Text style={styles.text}> {formatTime(minute)}:{formatTime(seconds)} </Text>
    );

};

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxxl,
        fontWeight: '500',
        color: colors.white,
        padding: spacing.lg,
        
    }
})


export default CountDown;