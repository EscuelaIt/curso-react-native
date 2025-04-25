import { StyleSheet, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Constants from 'expo-constants';

import React from 'react';
import TodoList from './TodoList';

export default function MainContent() {
    const insets = useSafeAreaInsets;

    return (
        <SafeAreaView style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <TodoList />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    safeArea: {
        flex: 1
    },
    androidContainer: {
        flex: 1,
        paddingTop: Constants.statusBarHeight

    }

});