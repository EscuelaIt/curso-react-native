import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import React from 'react';

export default function EpisodeListItem({ episode, onPress }) {
    return (
        <TouchableOpacity onPress={() => onPress(episode)}>
            <View style={{ backgroundColor: '#99ef', borderBottomWidth: 1, borderBottomColor: 'rgba(58, 54, 56, 0.24)', }}>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'space-between', padding: 10, width: '100%' }}>
                    <View>
                        <Text variant='titleMedium'>{episode.name.slice(0, 30)}</Text>
                        <Text>{episode.air_date}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}