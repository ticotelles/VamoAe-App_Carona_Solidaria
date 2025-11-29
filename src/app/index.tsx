import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import LoginPage from '../pages/login';
import RegisterUserPage from '../pages/registerUser/registerUser';
import TabRoutes from '../routes/tab.routes';

const Stack = createNativeStackNavigator();

export default function Index() {
    return (
        <AuthProvider>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Home"
                    component={TabRoutes}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Login"
                    component={LoginPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RegisterUser"
                    component={RegisterUserPage}
                    options={{ title: 'Cadastro de Usuário',
                        headerTitleStyle: { color: '#EA9C36'}
                     }}
                />
            </Stack.Navigator>
        </AuthProvider>
    );
}



