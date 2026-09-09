import { ClockIcon, UserIcon } from 'phosphor-react-native';
import { StyleSheet, Text, View } from "react-native";

export default function AlbumHeader({ recipeName, recipe }) {
    return (
        <View style={styles.header}>
            <View style={styles.imgPlaceholder}></View>
            {/* <Image source={{ uri: album.cover }} style={styles.cover} contentFit="cover" /> */}
            <Text style={styles.recipeName}>{recipe.name}</Text>
            <Text style={styles.details}>
                {recipe.description}
            </Text>

            <Text style={styles.recipeInfo}>
                Serve {recipe.servings} pessoa(s)<UserIcon style={styles.icon}/>
            </Text>

            <Text style={styles.recipeInfo}>
                Tempo de Preparo: {recipe.prep_time + recipe.cook_time} min(s) <br />{recipe.prep_time} min. preparo e {recipe.cook_time} min. cozimento<ClockIcon/>
            </Text>

            <Text style={styles.recipeInfo}>
                Calorias: {recipe.calories_per_serving} p/Porção
            </Text>

            <Text style={styles.recipeInfo}>
                Lista de Ingredientes:
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingBottom: 8
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

    details: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 24
    },
    icon: {
        // backgroundColor: 'blue',
        width: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'flex-start',
        marginTop: 24,
        marginBottom: 4
    },
})