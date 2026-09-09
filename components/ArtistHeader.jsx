import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput} from "react-native";


export default function ArtistHeader({ artist }) {

    return (
        <View style={styles.header}>

            <TextInput style={styles.textInput} placeholder="Buscar Receita" placeholderTextColor={"#9999"}>
                
            </TextInput>

            <Image source={{ uri: artist.photo }} style={styles.photo} contentFit="cover" />
            <Text style={styles.name}>{artist.name}</Text>
            <Text style={styles.subtitle}>
                {artist.nationality} - {}
            </Text>
            <Text style={styles.sectionTitle}>Álbuns</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingBottom: 8,
    },
    textInput:{
        width: 338,
        height: 48,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 24,
        alignContent: 'center',
        alignItems: 'center',
        
    },
    photo: {
        width: 180,
        height: 180,
        borderRadius: 90,
        marginBottom: 16,
    },
    name: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center'
    },
    subtitle: {
        color: '#b3b3b3',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 6
    },
    sectionTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'flex-start',
        marginTop: 28,
        marginBottom: 8
    }
})