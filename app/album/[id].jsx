import recipes from '@/data/recipes.json'
import { Stack, useLocalSearchParams } from 'expo-router'
import { ScrollView, StyleSheet } from 'react-native'

import MeatHeader from '@/components/MeatHeader'

export default function AlbumScreen() {
    const params = useLocalSearchParams()
    const recipe = recipes.data[Number(params.id)]

    return (
        <>
            <Stack.Screen options={{ title: recipe.name }} />
            <ScrollView style={styles.container}>
                <MeatHeader recipeName={recipe.name} recipe={recipe} />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})