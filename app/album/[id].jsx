import recipes from '@/data/recipes.json'
import { useLocalSearchParams } from 'expo-router'
import { FlatList, StyleSheet } from 'react-native'

import AlbumHeader from '@/components/AlbumHeader'
import RecipeIngredients from '@/components/RecipeIngredients'

export default function AlbumScreen() {
    const params = useLocalSearchParams()
    const recipe = recipes.data[Number(params.id)]

    return (
        <FlatList
            style={styles.container}
            data={recipe.ingredients}
            keyExtractor={(item, index) => String(index)}
            ListHeaderComponent={<AlbumHeader recipeName={recipe.name} recipe={recipe} /> }
            renderItem={({ item, index }) => (
                <RecipeIngredients ingredients={item} index={index} />
            )}
        />
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})