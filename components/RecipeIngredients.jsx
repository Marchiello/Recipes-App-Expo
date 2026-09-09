import { StyleSheet, Text, View } from "react-native";

export default function RecipeIngredients({ ingredients }) {
    return (
        <View style={styles.row}>
            <Text style={styles.title}>{ingredients.name}: {ingredients.quantity} {ingredients.unit}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    index: {
        color: '#b3b3b3',
        fontSize: 14,
        width: 24
    },
    ingredients: {
        backgroundColor: 'blue',
    },
    title: {
        color: '#ffffff',
        fontSize: 15,
        flex: 1,
        marginRight: 12
    },
    duration: {
        color: '#b3b3b3',
        fontSize: 13
    },
    
})