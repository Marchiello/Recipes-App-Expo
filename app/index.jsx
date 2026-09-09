import { useRouter } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';

import AlbumListItem from '@/components/AlbumListItem';	
import ArtistHeader from '@/components/ArtistHeader';

import recipe from "@/data/artist.json";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
	// Lógica
	const router = useRouter()
	const insets = useSafeAreaInsets()

	function gotoAlbum(index) {
		router.push({
			pathname: '/album/[id]',
			params: { id: index }
		})
	}

	return ( // Visual
		<FlatList
			style={styles.container}
			contentContainerStyle={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
			data={recipe.albums}
			keyExtractor={(item, index) => String(index)}
			ListHeaderComponent={<ArtistHeader artist={recipe} />}
			renderItem={({item, index}) => (
				<AlbumListItem album={item} onPress={() => gotoAlbum(index)} />
			)}
		/>
	);
}

// Estilização
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})