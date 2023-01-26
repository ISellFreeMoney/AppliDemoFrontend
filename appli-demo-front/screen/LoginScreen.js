import React, {useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { Button, Input, Image} from '@rneui/themed';
import {StatusBar} from 'expo-status-bar';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';

const LoginScreen = ({navigation}) => {
	const [email,setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = () => {
			signInWithEmailAndPassword(auth, email, password)
			.then(authUser =>{
				const user = authUser.user;
			}).catch((error) => {
				alert(error);
			})
	}
	return (
		<KeyboardAvoidingView behavior='padding: 1' style={styles.container}>
			<StatusBar style='light'/>
			<Image
			source={{
				uri:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
			}}
			style={{ width: 200, height: 200}}
			/>
			<View style={styles.inputContainer}>
				<Input placeholder='Adresse Mail' autoFocus type='Email' value={email}  onChangeText={(text) => setEmail(text)} />
				<Input placeholder='Mot de passe' secureTextEntry type='password' value={password} onChangeText={(text) => setPassword(text)} />
			</View>

			<Button raised containerStyle={styles.button} onPress={signIn} title="Se connecter"/>
			<Button containerStyle={styles.button} onPress={() => navigation.navigate('Register')} type="outline" title="S'inscrire"/>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "white",

	},
	inputContainer: {
		width: 300,
	},
	button: {
		width: 200,
		marginTop:10,
	},
})

export default LoginScreen;
