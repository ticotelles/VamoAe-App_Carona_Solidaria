import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomePage from '../pages/home';
import RegisterRidePage from '../pages/registerRide';
import RegisterRideRequestPage from '../pages/registerRideRequest';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarIcon:({ color, size }) => <Octicons name="home-fill" size={24} color="black" />,
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Cadastrar Carona"
                component={RegisterRidePage}
                options={{
                    tabBarIcon:({color, size }) =>  <AntDesign name="car" size={24} color="black" />, 
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Solicitar Carona"
                component={RegisterRideRequestPage}
                options={{
                    tabBarIcon:({ color, size }) => <AntDesign name="like" size={24} color="black"/>,
                    headerShown: false
                }}
            />
                
        </Tab.Navigator>
    )
}