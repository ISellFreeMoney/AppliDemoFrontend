import {StatusBar} from 'expo-status-bar';
import { Button, Input, Image} from '@rneui/themed';
import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Text} from 'react-native';

const RegisterScreen = ({navigation}) => {
	return (
		<KeyboardAvoidingView behavior='padding: 1' style={styles.container}>
			<StatusBar style='light' />
			<Text h3 style= {{ marginBottom: 50 }}>
				Crée ton compte !
			</Text>
			<View style={styles.inputContainer}>
				<Input 
					placeholder='Full Name' autoFocus type='text'
				/>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {

	}
})

export default RegisterScreen;
