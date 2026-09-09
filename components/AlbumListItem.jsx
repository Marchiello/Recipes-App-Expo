import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function AlbumListItem({ album, onPress }) {
    return (
        <Pressable
            style={({ pressed }) => [styles.row, pressed && styles.rowPressed]} /* hover no css */
            onPress={onPress}
        >
            <Image source={{ uri: album.cover }} style={styles.cover} contentFit="cover" />
            <View style={styles.info}>
                <Text style={styles.name} numberOfLines={1}>
                    {album.name}
                </Text>
                <Text style={styles.year}>{album.year}</Text>
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
        margin: 'auto',
        marginTop: 16,
        marginBottom: 24,
        marginLeft: 14,
    },
    name: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    year: {
        color: '#b3b3b3',
        fontSize: 13,
        marginTop: 3,
    },
    
})