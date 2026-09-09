import artist from '@/data/artist.json'
import { useLocalSearchParams } from 'expo-router'
import { FlatList, StyleSheet } from 'react-native'

import AlbumHeader from '@/components/AlbumHeader'
import TrackListItem from '@/components/TrackListItem'

export default function AlbumScreen() {
    const params = useLocalSearchParams()
    const album = artist.albums[Number(params.id)]

    return (
        <FlatList
            style={styles.container}
            data={album.tracks}
            keyExtractor={(item, index) => String(index)}
            ListHeaderComponent={<AlbumHeader artist={artist.name} album={album} /> }
            renderItem={({ item, index }) => (
                <TrackListItem track={item} index={index} />
            )}
        />
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})