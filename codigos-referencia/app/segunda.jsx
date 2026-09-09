import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function SegundaScreen() {
    const router = useRouter()

    const params = useLocalSearchParams()
    const user = JSON.parse(params.user)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Segunda tela</Text>
            <Text style={styles.text}>{user.nome}</Text>
            <Button title="Voltar" onPress={() => router.back()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	text: {
		fontSize: 28
	}
})