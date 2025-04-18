import { FlatList } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import React, { useState, useCallback, useRef } from 'react';
import { useGetData } from '../api/useGetData';
import ListHeader from './ListHeader';
import CharacterListItem from './CharacterListItem';
import CharacterCardModal from './CharacterCardModal';
import ListFooter from './ListFooter';


function CharactersList() {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [endpoint, setEndpoint] = useState('character');
    const { data, isLoading, error } = useGetData(endpoint);
    const flatListRef = useRef(null);

    const scrollToTop = () => {
        flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
    };
    const scrollToEnd = () => {
        flatListRef.current?.scrollToEnd({ animated: true });
    };


    //esta función se pasará con onSelect a CharacterListItem. useCallback evita que se vuelva a crear la función en cada render, lo que podría causar un re-render innecesario de los componentes hijos.
    const handleSelect = useCallback((character) => {
        setSelectedCharacter(character);
    }, []);
    if (isLoading) {
        return <ActivityIndicator animating={true} size="large" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
    }
    if (error) {
        return <Text style={{ textAlign: 'center', marginTop: 20 }}>Error: {error}</Text>;
    }
    return (
        <>
            <FlatList
                ref={flatListRef}
                data={data.results}
                keyExtractor={(item) => item?.id?.toString()}
                ListHeaderComponent={<ListHeader title='Characters' onScroll={scrollToEnd} />}
                ListFooterComponent={<ListFooter next={!!data?.info.next} onScroll={scrollToTop} />}
                ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No characters found</Text>}
                stickyHeaderIndices={[0]}
                contentContainerStyle={{ paddingVertical: 10 }}
                renderItem={({ item }) => (
                    <CharacterListItem character={item} onSelect={handleSelect} />
                )}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (data?.info?.next) {
                        setEndpoint(data.info.next);
                    }
                }
                }
            />
            <CharacterCardModal character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
        </>
    );
}
export default CharactersList;