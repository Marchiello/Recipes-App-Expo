import { Image } from 'expo-image';
import { CaretRightIcon } from 'phosphor-react-native';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { imageMap } from '../utils/imageMap';

export default function RecipeListItem({ recipe, onPress }) {
    return (
        <View style={styles.row}>
            <Pressable
                style={({ pressed }) => [styles.info, pressed && styles.rowPressed]}
                onPress={onPress}
            >
                {recipe.image_path ? (
                    <Image source={imageMap[recipe.image_path]} style={styles.cover} contentFit="cover" />
                ) : (
                    <View style={styles.imgPlaceholder}></View>
                )}
                <Text style={styles.name}>
                    {recipe.name}
                </Text>
                <CaretRightIcon style={{color: 'black', width: 32, height: 32, marginLeft: 24 }} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        margin: 'auto',
        // paddingHorizontal: 24,
        // paddingVertical: 10,
        width: 338,
        marginTop: 24,
    },
    rowPressed: {
        backgroundColor: '#e6e6e6'
    },
    cover: {
        width: 56,
        height: 56,
        borderRadius: 4,
        backgroundColor: '#282828',
        margin: 16,
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