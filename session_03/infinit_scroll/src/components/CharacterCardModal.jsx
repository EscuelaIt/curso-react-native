import { Card, Button, Text, Portal, Modal } from 'react-native-paper';
import Animated, { FadeIn, FadeOutDown } from 'react-native-reanimated';
import React from 'react';

function CharacterCardModal({ character, onClose }) {
    if (!character) return null;
    const { id, name, status, species, type, gender, origin: { name: originName, url: originUrl }, location: { name: locationName, url: locationUrl }, image } = character;

    return (
        <Portal>
            <Modal visible={!!character} onDismiss={onClose}>
                <Animated.View entering={FadeIn} exiting={FadeOutDown}>
                    <Card>
                        <Card.Title title={name} subtitle={`Last seen on: ${locationName}`} />
                        <Card.Content>
                            <Text variant='bodyMedium'>Status: {status}</Text>
                            <Text variant="bodyMedium">Gender: {gender}</Text>
                            <Text variant="bodyMedium">Species: {species}</Text>
                            {type && <Text variant="bodyMedium">SubSpecies: {type}</Text>}
                            <Text variant="bodyMedium">Origin: {originName}</Text>
                        </Card.Content>
                        <Card.Cover source={{ uri: image }} style={{ height: 350 }} />
                        <Card.Actions>
                            <Button onPress={onClose}>Close</Button>
                        </Card.Actions>
                    </Card>
                </Animated.View>
            </Modal>
        </Portal>
    );
}
export default CharacterCardModal;