import { Text } from 'react-native-paper';
import Animated, { SlideInLeft, SlideOutRight } from 'react-native-reanimated';


import React from 'react';

export default function index() {
    return (
        <Animated.View entering={SlideInLeft} exiting={SlideOutRight} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text variant='headlineLarge'>Home Screen</Text>
        </Animated.View>
    );
}