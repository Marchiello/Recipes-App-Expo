import { StyleSheet, Text, View } from "react-native";

export default function TrackListItem({ track, index }) {
    return (
        <View style={styles.row}>
            <Text style={styles.index}>{index + 1}</Text>
            <Text style={styles.title} numberOfLines={1}>{track.title}</Text>
            <Text style={styles.duration}>{track.duration}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#282828'
    },
    index: {
        color: '#b3b3b3',
        fontSize: 14,
        width: 24
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