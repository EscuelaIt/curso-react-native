import Animated, { SlideInLeft, SlideOutRight } from 'react-native-reanimated';
import React from 'react';
import EpisodesList from '../src/components/EpisodesList';



export default function episodes() {
    return (
        <Animated.View entering={SlideInLeft} exiting={SlideOutRight} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <EpisodesList />
        </Animated.View>
    );
}