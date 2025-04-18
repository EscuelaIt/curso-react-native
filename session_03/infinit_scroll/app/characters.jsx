import React from 'react';
import CharactersList from '../src/components/CharactersList';
import Animated, { SlideInLeft, SlideOutRight } from 'react-native-reanimated';
export default function characters() {
    return (
        <Animated.View entering={SlideInLeft} exiting={SlideOutRight} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <CharactersList />
        </Animated.View>

    );
}