import { Image } from 'expo-image';
import { ClockIcon, UserIcon } from 'phosphor-react-native';
import { StyleSheet, Text, View } from "react-native";
import { imageMap } from "../utils/imageMap";

export default function MeatHeader({ recipeName, recipe }) {
    return (
        <View style={styles.header}>
            {recipe.image_path ? (
                <Image source={imageMap[recipe.image_path]} style={styles.cover} contentFit="cover" />
            ) : (
                <View style={styles.imgPlaceholder}></View>
            )}
            <Text style={styles.recipeName}>{recipe.name}</Text>
            <Text style={styles.details}>
                {recipe.description}
            </Text>

            <View style={styles.infoRow}>
                <Text style={styles.recipeInfoText}>
                    Serve {recipe.servings} pessoa(s)
                </Text>
                <UserIcon style={styles.icon}/>
            </View>

            <View style={styles.infoRow}>
                <Text style={styles.recipeInfoText}>
                    Tempo de Preparo: {recipe.prep_time + recipe.cook_time} min(s) | {recipe.prep_time} min. preparo e {recipe.cook_time} min. cozimento
                </Text>
                <ClockIcon style={styles.icon}/>
            </View>

            <Text style={styles.recipeInfo}>
                Calorias: {recipe.calories_per_serving} kcal p/Porção
            </Text>
            
            <Text style={styles.recipeInfo}>
                Proteinas: {recipe.protein} g p/Porção
            </Text>
            
            <Text style={styles.recipeInfo}>
                Origem: {recipe.cuisine}
            </Text>

            <Text style={styles.recipeInfo}>
                Dificuldade: {recipe.difficulty}
            </Text>
            

            <Text style={styles.recipeInfo}>
                Lista de Ingredientes:
            </Text>
            <View style={styles.ingredientsContainer}>
                {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                    <View key={index} style={styles.ingredientChip}>
                        <Text style={styles.ingredientText}>
                            {ingredient.name}: {ingredient.quantity} {ingredient.unit}
                        </Text>
                    </View>
                ))}
            </View>

            <Text style={styles.recipeInfo}>
                Instruções de preparo:
            </Text>

            <Text style={styles.instructions}>
                {recipe.instructions}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingBottom: 8,
        marginTop: 16 
    },
    cover: {
        width: 220,
        height: 220,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#282828'
    },
    imgPlaceholder: {
        width: 144,
        height: 144,
        borderBlockColor: 'black',
        borderWidth: 2,
        borderRadius: 8,
        margin: 16
    },
    recipeName: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 16
    },
    recipeInfo: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 12
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        flexWrap: 'wrap',
    },
    recipeInfoText: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        marginRight: 4,
    },

    details: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 24
    },
    icon: {
        // backgroundColor: 'blue',
        width: 20,
    },

    ingredientsContainer: {
        justifyContent: 'center',
        // marginTop: 8,
    },
    ingredientChip: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        margin: 4,
        borderWidth: 2,
        width: 240,
    },
    ingredientText: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },
    instructions: {
        fontSize: 16,
        textAlign: 'center',
        width: 240,
    }
})