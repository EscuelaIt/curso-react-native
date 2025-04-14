import { View, Image, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import React, { memo } from 'react';


function CharacterListItem({ character }) {

    const sayHi = () => Alert.alert('Hello', `Hello ${character.name}`);
    return (
        <TouchableOpacity onPress={() => sayHi(character)}>
            <View style={{ backgroundColor: '#99ef', borderBottomWidth: 1, borderBottomColor: 'rgba(58, 54, 56, 0.24)', }}>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'space-between', padding: 10, width: '100%' }}>
                    <View>
                        <Text variant='titleMedium'>{character.name.slice(0, 30)}</Text>
                        <Text>{character.status}</Text>
                    </View>
                    <Image source={{ uri: character.image }} style={{ borderRadius: 50, width: 50, height: 50 }} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default CharacterListItem;