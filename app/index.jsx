import { useRouter } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';

import RecipeHeader from '@/components/RecipeHeader';
import RecipeListItem from '@/components/RecipeListItem';

import recipe from "@/data/recipes.json";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
	// Lógica
	const router = useRouter()
	const insets = useSafeAreaInsets()
	const [search, setSearch] = useState("");

	function gotoRecipe(index) {
		router.push({
			pathname: '/album/[id]',
			params: { id: index }
		})
	}

	const filteredRecipes = recipe.data.filter(r => 
		r.name.toLowerCase().includes(search.toLowerCase())
	);

	return ( // Visual
		<FlatList
			style={styles.container}
			contentContainerStyle={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
			data={filteredRecipes}
			keyExtractor={(item, index) => String(item.id)}
			ListHeaderComponent={<RecipeHeader search={search} onSearchChange={setSearch} />}
			renderItem={({item}) => {
				const originalIndex = recipe.data.findIndex(r => r.id === item.id);
				return <RecipeListItem recipe={item} onPress={() => gotoRecipe(originalIndex)} />
			}}
		/>
	);
}

// Estilização
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})