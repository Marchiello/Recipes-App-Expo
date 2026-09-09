import { StyleSheet, TextInput, View } from "react-native";
export default function RecipeHeader({ search, onSearchChange }) {
    return (
        <View style={styles.header}>
            <TextInput 
                style={styles.textInput} 
                placeholder="Buscar receita" 
                placeholderTextColor={"#999999"}
                value={search}
                onChangeText={onSearchChange}
            />
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
        paddingHorizontal: 20,
    }
})