import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import React from 'react';

export default function ListFooter({ next, onScroll }) {
    return (
        <View>
            <Text style={{ textAlign: 'center', marginTop: 20 }}>{next ? "slide up for more" : "End of list"}</Text>
            <Button onPress={onScroll}>Back to top</Button>
        </View>
    );
}