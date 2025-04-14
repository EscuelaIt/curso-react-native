import { View, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import React, { useState } from 'react';
import { useGetData } from '../api/useGetData';
import CharacterListItem from './CharacterListItem';
import ListHeader from './ListHeader';


export default function CharactersList() {
    const [endpoint, setEndpoint] = useState('character');
    const { data, isLoading, error } = useGetData(endpoint);


    return (
        <>
            <FlatList
                data={data?.results}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={<ListHeader title='Characters' />}
                renderItem={({ item }) => (
                    <CharacterListItem character={item} />
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
        </>
    );
}