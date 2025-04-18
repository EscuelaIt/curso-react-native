import { FlatList, Text } from 'react-native';
import React, { useState, useRef } from 'react';
import { useGetData } from '../api/useGetData';
import ListFooter from './ListFooter';
import ListHeader from './ListHeader';
import EpisodeListItem from './EpisodeListItem';
import EpisodeCardModal from './EpisodeCardModal';

export default function EpisodesList() {
    const [endpoint, setEndpoint] = useState('episode');
    const { data, isLoading, error } = useGetData(endpoint);
    const [selectedEpisode, setSelectedEpisode] = useState(null);
    const flatListRef = useRef(null);
    const scrollToTop = () => {
        flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
    };
    const scrollToEnd = () => {
        flatListRef.current?.scrollToEnd({ animated: true });
    };
    return (
        <>
            <FlatList
                ref={flatListRef}
                data={data?.results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <EpisodeListItem episode={item} onPress={setSelectedEpisode} />
                )}
                contentContainerStyle={{ padding: 10 }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No characters found</Text>}
                ListHeaderComponent={<ListHeader title="Episodes" onScroll={scrollToEnd} />}
                ListFooterComponent={<ListFooter next={!!data?.info.next} onScroll={scrollToTop} />}

                stickyHeaderIndices={[0]}

                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (data?.info.next) {
                        setEndpoint(data.info.next);
                    }
                }}
            />
            <EpisodeCardModal episode={selectedEpisode} onClose={() => setSelectedEpisode(null)} />

        </>
    );
}