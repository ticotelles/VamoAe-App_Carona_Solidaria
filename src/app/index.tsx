import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegisterUserPage from '../pages/registerUser/registerUser';

const Stack = createNativeStackNavigator();

export default function Index() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name="RegisterUser" component={RegisterUserPage} options={{ title: 'Cadastro' }} />
            <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }} />
        </Stack.Navigator>
    );
}



