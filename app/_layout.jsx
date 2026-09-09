import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
	return (
		<>
			<Stack screenOptions={{headerStyle:styles.header}}>
				<Stack.Screen name="index" options={{title: "Lista de Receitas", headerTitleStyle:{marginLeft: '2em'}}} />
				<Stack.Screen name="album/[id]" options={{title: "Nome Receita", headerTitleAlign:'center' }} />
			</Stack>
			<StatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#FFDD00"
	}
})