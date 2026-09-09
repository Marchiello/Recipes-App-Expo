import { useRouter } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';

import RecipeHeader from '@/components/RecipeHeader';
import RecipeListItem from '@/components/RecipeListItem';

import recipe from "@/data/recipes.json";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
	// Lógica
	const router = useRouter()
	const insets = useSafeAreaInsets()

	function gotoRecipe(index) {
		router.push({
			pathname: '/album/[id]',
			params: { id: index }
		})
	}

	return ( // Visual
		<FlatList
			style={styles.container}
			contentContainerStyle={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
			data={recipe.data}
			keyExtractor={(item, index) => String(index)}
			ListHeaderComponent={<RecipeHeader artist={recipe} />}
			renderItem={({item, index}) => (
				<RecipeListItem recipe={item} onPress={() => gotoRecipe(index)} />
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