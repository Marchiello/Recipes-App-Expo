import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function AlbumHeader({ artist, album }) {
    return (
        <View style={styles.header}>
            <Image source={{ uri: album.cover }} style={styles.cover} contentFit="cover" />
            <Text style={styles.albumName}>{album.name}</Text>
            <Text style={styles.artistName}>{artist}</Text>
            <Text style={styles.info}>
                {album.year} - {album.track_count} faixas
            </Text>
            <Text style={styles.sectionTitle}>Faixas</Text>
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
    albumName: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center'
    },
    artistName: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '600',
        marginTop: 8,
    },
    info: {
        color: '#b3b3b3',
        fontSize: 13,
        marginTop: 4,
        textAlign: 'center'
    },
    sectionTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'flex-start',
        marginTop: 24,
        marginBottom: 4
    },
})