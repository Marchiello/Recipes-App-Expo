import { CaretRightIcon } from 'phosphor-react-native';
import { Pressable, StyleSheet, Text, View } from "react-native";


export default function RecipeListItem({ recipe, onPress }) {
    return (
        <Pressable
            style={({ pressed }) => [styles.row, pressed && styles.rowPressed]} /* hover no css */
            onPress={onPress}
        >
            <View style={styles.info} onPress={onPress}>
                {/* <Image source={{ uri: "" }} style={styles.cover} contentFit="cover" /> */}
                <View style={styles.imgPlaceholder}></View>
                <Text style={styles.name}>
                    {recipe.name}
                </Text>
                <CaretRightIcon style={{color: 'black', width: 32, height: 32, marginLeft: 24 }}>
                    
                </CaretRightIcon>
                <Text style={styles.year}>{recipe.year}</Text>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 10
    },
    rowPressed: {
        backgroundColor: '#1a1a1a'
    },
    cover: {
        width: 56,
        height: 56,
        borderRadius: 4,
        backgroundColor: '#282828'
    },
    info: {
        width: 338,
        height: 98,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 8,
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    name: {
        color: '#020000',
        fontSize: 12,
        width: 160,
        fontWeight: '600',
    },
    imgPlaceholder: {
        width: 56,
        height: 56,
        borderBlockColor: 'black',
        borderWidth: 2,
        borderRadius: 8,
        margin: 16
    }
    
})