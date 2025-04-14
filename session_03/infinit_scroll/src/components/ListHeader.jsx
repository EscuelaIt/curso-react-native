import { View, StyleSheet } from 'react-native';
import { Text, Button, IconButton } from 'react-native-paper';
import React, { useState } from 'react';

export default function ListHeader({ title }) {


    return (
        <View style={s.container}>
            <Text variant='headlineSmall'>{title}</Text>
            {/* <Button
                disabled={isLoading}
                icon="arrow-down"
                mode="contained"
                contentStyle={{ flexDirection: 'row-reverse' }}
                onPress={handlePress}>end</Button> */}
            {/* <IconButton icon="arrow-down"
                size={24}
                mode='contained'
                iconColor="#404040"
                style={{ backgroundColor: '#99ef' }}
                loading={isLoading}
                onPress={handlePress}
                disabled={isLoading} /> */}
        </View>
    );
}
const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#99ef',
        borderBottomWidth: 1,
        borderBottomColor: '#333333',

    },
});