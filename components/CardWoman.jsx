import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

export default function CardWoman({ woman }) {

    return (
        <View style={styles.womanCardContainer}>
            <LinearGradient
                colors={['rgba(185,28,89,.8)', 'rgba(194,149,214,.7)', 'rgba(147,123,191,.6)']}
                style={styles.background}
            />
            <Text style={styles.titleText}>{woman.name} {woman.lastName}</Text>
            <Image source={{ uri: woman.photo }} style={{ width: 200, height: 200 }} />
            <Text>{woman.nationality}</Text>
            <Text>{woman.bio}</Text>

        </View>
    );
}
const styles = StyleSheet.create({
    womanCardContainer: {
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 15,
        padding: 30,
        borderRadius: 10,
        height: 500,
    },
    titleText: {
        fontSize: 22,
        marginBottom: 20,
    },
    contentText: {
        fontSize: 18,
        marginBottom: 20,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 490,
    },
});