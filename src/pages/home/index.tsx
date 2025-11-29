import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import { fetchWithAuth } from '../../lib/api';
import styles from './styles';




type Rides = {
    id: string;
    origin: string;
    destination: string;
    whatsapp: string;
    value: number;
    date: string;
    time: string;
    isRideRequest: boolean;
    user?: { id: number; fullname: string } | null;
};




export default function HomePage() {
    const [rides, setRides] = useState<Rides[]>([]);



    const fetchRides = async () => {
        try {
            const resp = await fetchWithAuth('/home');
            if (!resp.ok) {
                const err = await resp.json().catch(() => ({}));
                console.error('Erro ao buscar caronas', err);
                return;
            }
            const data = await resp.json();
            setRides(data);
            console.log('Rides fetched successfully:', data);
        } catch (error) {
            console.error('error aqui',error);
        }
    }



    useFocusEffect(
        useCallback(() => {
            fetchRides();
        }, [])
    );

    return (
        <View style={styles.container}>

            <FlatList
                data={rides}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.cardRide}>
                        <View style={styles.wrapperNamePrice}>
                            <Text style={styles.nameTextCard}>{item.user?.fullname ?? 'Nome desconhecido'}</Text>

                            {item.isRideRequest ? (

                                <View style={styles.wrapperPrice}>

                                    <AntDesign name="like" size={15} color="#EA580C" style={{ borderRadius: 100, backgroundColor: '#FFEDD5', padding: 5 }} />
                                    <Text style={styles.textStatusRequest}>Pedindo</Text>
                                </View>
                            ) : (
                                <View style={styles.wrapperPrice}>

                                    <AntDesign name="plus" size={15} color="green" style={{ borderRadius: 100, backgroundColor: '#DCFCE7', padding: 5 }} />
                                    <Text style={styles.textStatusOffer}>Oferecendo</Text>
                                </View>
                            )}


                            <Text style={styles.priceTextCard}>R$ {!item.value ? '-' : item.value} </Text>


                        </View>

                        <View style={styles.wrapperOrigemDestino}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../../assets/images/origemDestinoIcon.png')}
                                    style={styles.origemDestinoIcon}
                                    resizeMode="contain" />
                                <View style={{ gap: 15 }}>
                                    <Text style={styles.originTextCard}>{item.origin}</Text>
                                    <Text style={styles.originTextCard}>{item.destination}</Text>
                                </View>
                            </View>
                            <Text style={styles.timeTextCard}>{item.time}</Text>
                        </View>
                        <Text style={{ color: '#9CA3AF', padding: 5 }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - </Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <Ionicons name="calendar" size={24} color="black" />
                                <Text style={styles.dateTextCard}>{item.date}</Text>
                            </View>

                            <TouchableOpacity style={styles.buttonContact}>
                                <Text style={styles.contactTextCard}>Contato</Text>
                            </TouchableOpacity>

                        </View>


                    </View>
                )}
            />

        </View>
    )
}