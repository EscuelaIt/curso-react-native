import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import React, { memo } from 'react';


function CharacterListItem({ character, onSelect }) {
    /*
    Aunque .slice() sea rápido, si lo hacés inline se ejecuta en cada render (incluso si el nombre no cambió). Al calcularlo antes, el motor de render simplemente toma el valor ya procesado.
    En componentes muy grandes o renderizados muchas veces(como ítems de una FlatList), cada micro - optimización suma.
    Esto es mejor que hacerlo dentro del JSX directamente
    */
    const characterName = character.name.length > 30 ? character.name.slice(0, 30) + '...' : character.name;
    return (
        <TouchableOpacity onPress={() => onSelect(character)}>
            <View style={{ backgroundColor: '#99ef', borderBottomWidth: 1, borderBottomColor: 'rgba(58, 54, 56, 0.24)', }}>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'space-between', padding: 10, width: '100%' }}>
                    <View>
                        <Text variant='titleMedium'>{characterName}</Text>
                        <Text>{character.status}</Text>
                    </View>
                    <Image source={{ uri: character.image }} style={{ borderRadius: 50, width: 50, height: 50 }} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default memo(CharacterListItem);