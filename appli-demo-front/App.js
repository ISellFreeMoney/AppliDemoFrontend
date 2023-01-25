import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';

const Stack = createNativeStackNavigator();
const globalScreenOption = {
	headerStyle: {backgroundColor: "#222222"},
	headerTitleStyle: {color: "white"},
	headerTintColor: "white",
};

export default function App() {
  return (
		<NavigationContainer style={styles.container}>
			<Stack.Navigator screenOptions={globalScreenOption}>
				<Stack.Screen name='Login' component={LoginScreen} />
				<Stack.Screen name='Register' component={RegisterScreen} />
			</Stack.Navigator>
		</NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
