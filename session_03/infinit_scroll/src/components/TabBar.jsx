import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { usePathname } from 'expo-router';

export default function TabBar() {
    const pathname = usePathname();
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, backgroundColor: '#99ef' }}>
            <Link href={"/"}
                style={pathname === '/' ? s.activeTab : null}>
                Home</Link>
            <Link href={"/characters"}
                style={pathname === '/characters' ? s.activeTab : null}
            >Characters</Link>
            <Link href={"/episodes"}
                style={pathname === '/episodes' ? s.activeTab : null}
            >Episodes</Link>
        </View>
    );
}

const s = StyleSheet.create({
    activeTab: {
        color: 'white',
        fontSize: 16
    }
});