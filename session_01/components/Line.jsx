import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Line() {
    return (
        <View style={styles.line}>

        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 1,
        borderStyle: "solid",
        borderWidth: 1,
        borderBottomColor: "grey",
        marginHorizontal: 100,
        marginVertical: 30

    }
});