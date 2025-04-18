import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Portal, Text } from 'react-native-paper';
import Animated, { FadeIn, FadeOutDown } from 'react-native-reanimated';
import { useGetData } from '../api/useGetData';
export default function EpisodeCardModal({ episode, onClose }) {
    const characterIdList = episode && episode.characters.map((character) => {
        const url = new URL(character);
        return url.pathname.split('/').pop();
    });
    const { data } = useGetData(`character/${characterIdList?.join(',')}`);
    return (
        <Portal>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Modal visible={!!episode} onDismiss={onClose} >
                    <Animated.ScrollView entering={FadeIn} exiting={FadeOutDown} >

                        <Card>
                            <Card.Title title={episode?.name} subtitle={`First Aired on:  ${episode?.air_date}`} />
                            <Text variant='titleMedium' style={{ textAlign: 'center' }}>Cast of characters</Text>
                            <Card.Content style={s.charactersContainer}>

                                {data?.map((character) => (
                                    <View style={s.character} key={character.id}>
                                        <Text key={character.id} variant='bodyLarge' numberOfLines={5}>{character.name}</Text>
                                        <Image source={{ uri: character.image }} style={{ width: 150, height: 150, borderRadius: 10 }} />
                                    </View>
                                ))}
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={onClose}>Close</Button>
                            </Card.Actions>
                        </Card>
                    </Animated.ScrollView>
                </Modal>
            </View>
        </Portal>
    );
}

const s = StyleSheet.create({
    charactersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',

    },
    character: {
        width: '48%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});