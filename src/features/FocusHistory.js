import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export const FocusHistory = ({ history }) => {

    if (!history || !history.length) return <Text style={styles.titleUnfocused}> We have not focused on anything yet :/</Text>;

    const renderItem = ({ item }) => <Text style={styles.items}> - {item} </Text>


    return (
        <View style={styles.container}>
            <Text style={styles.titleFocused}> Things we have focused on: </Text>
            <FlatList
                data={history}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingLeft: spacing.lg,
    
        flex: 1

    },
    titleFocused: {
        color: colors.white,
        paddingTop: spacing.md,

        fontSize: fontSizes.md,
        textAlign: "left",
    },
    titleUnfocused:{
        flex: 1,
        paddingLeft: spacing.md,
        paddingTop: spacing.md,
        color: colors.white,
        fontSize: fontSizes.md,
    },
    items: {
        fontSize: fontSizes.md,
        color: colors.lighterGrey,
        paddingTop: spacing.sm
    }
})