import AntDesign from '@expo/vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import RegisterRidePage from '../pages/registerRide';
import RegisterRideRequestPage from '../pages/registerRideRequest';


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Cadastrar Carona"
                component={RegisterRidePage}
                options={{
                    tabBarIcon:({color, size }) =>  <AntDesign name="car" size={24} color="black" /> 
                }}
            />
            <Tab.Screen
                name="Solicitar Carona"
                component={RegisterRideRequestPage}
                options={{
                    tabBarIcon:({ color, size }) => <AntDesign name="like" size={24} color="black"/>
                }}
                />
                
        </Tab.Navigator>
    )
}