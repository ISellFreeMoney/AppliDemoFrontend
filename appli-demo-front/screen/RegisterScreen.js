import {StatusBar} from 'expo-status-bar';
import { Button, Input, Image} from '@rneui/themed';
import React, {useLayoutEffect, useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { Text } from '@rneui/base';
import {auth} from '../firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const RegisterScreen = ({navigation}) => {
	// const [name, setName] = useState("");
	// const [firstname, setFirstName] = useState("");
	const [pseudo, setPseudo] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [imageURL, setImageURL] = useState("");

useLayoutEffect(() => {
	navigation.setOptions({
		headerBackTitle: "Connection"

	})
}, [navigation])

	const register = () => {
		createUserWithEmailAndPassword(auth, email, password)
		.then(authUser => {
			const user = authUser;
		}).catch(error => alert(error.message))
	};

	return (
		<KeyboardAvoidingView behavior='padding: 1' style={styles.container}>
			<StatusBar style='light' />
			<Text h3 style= {{ marginBottom: 50 }}>
				Crée ton compte !
			</Text>
			<View style={styles.inputContainer}>
				{/* <Input 
					placeholder='Nom' 
					autoFocus 
					value= {name}
					type='text'
					onChange={(text) => {
						setName(text)
					}}
				/>
				<Input 
					placeholder='Prénom'
					type='text'
					value={firstname}
					onChange={
						(text) => {
							setFirstName(text)
						}
					}
					/> */}
				<Input 
					placeholder='Pseudo' 
					type='text'
					value={pseudo}
					onChange={
						(text) => {
							setPseudo(text)
						}
					}
					/>
					<Input 
					placeholder='Adresse mail' 
					type='Email' 
					value={email}
					onChange={
						(text) => {
							setEmail(text)
						}}
					/>
					<Input 
					placeholder='Mot de passe' 
					type='password' 
					secureTextEntry 
					value={password}
					onChange={
						(text) => {
							setPassword(text)
						}
					}
					/>
					<Input
					type='text'
					placeholder="URL de l'image de profil (optionnel)"
					value={imageURL}
					onChange={
						(text) => {
							setImageURL(text)
						}
					}
					/>
			</View>
			<Button 
			raised 
			title="S'inscrire" 
			containerStyle={styles.button}
			onPress={register}
			/>
			<View style={{ height: 50 }} />
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		width: 300,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "white",

	},
	button: {
		width: 200,
		marginTop: 10,
	},
})

export default RegisterScreen;
