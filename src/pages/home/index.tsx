import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import axios from 'axios';
import styles from './styles';


// const Carona = [
//     {
//         nome: 'Arthur Telles',
//         origem: 'Porteirinha',
//         destino: 'Montes Claros',
//         hora: '13:00',
//         data: '20/10/2025',
//         valor: " - ",
//         contato: '99999-9999',
//         isRideRequest: false,

//     },
//     {
//         nome: 'Arthur Telles',
//         origem: 'Porteirinha',
//         destino: 'Montes Claros',
//         hora: '13:00',
//         data: '20/10/2025',
//         valor: 45,
//         contato: '99999-9999',
//         isRideRequest: true
//     },
//     {
//         nome: 'Arthur Telles',
//         origem: 'Porteirinha',
//         destino: 'Montes Claros',
//         hora: '13:00',
//         data: '20/10/2025',
//         valor: " - ",
//         contato: '99999-9999',
//         isRideRequest: false
//     },
//     {
//         nome: 'Arthur Telles',
//         origem: 'Porteirinha',
//         destino: 'Montes Claros',
//         hora: '13:00',
//         data: '20/10/2025',
//         valor: " - ",
//         contato: '99999-9999',
//         isRideRequest: false
//     },
//     {
//         nome: 'Arthur Telles',
//         origem: 'Porteirinha',
//         destino: 'Montes Claros',
//         hora: '13:00',
//         data: '20/10/2025',
//         valor: 45,
//         contato: '99999-9999',
//         isRideRequest: true
//     },
// ]

type Ride = {
  id: string;
  origin: string;
  destination: string;
  whatsapp: string;
  value: number;
  date: string;
  time: string;
  isRideRequest: boolean;
};




export default function HomePage() {
    const [rides, setRides] = useState<Ride[]>([]);
    // const rides = prisma.createRide.findMany();

    useEffect(() => {

        const fetchRides = async () => {
            try {
                const response = await axios.get<Ride[]>('http://192.168.56.1:3000/createRide');
                setRides(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchRides();

    }, []);

    return (
        <View style={styles.container}>

            <FlatList
                data={rides}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.cardRide}>
                        <View style={styles.wrapperNamePrice}>
                            <Text style={styles.nameTextCard}>nome teste</Text>

                            {item.isRideRequest ? (
                                <View style={styles.wrapperPrice}>
                                    {/* <AntDesign name="plus" size={18} color="green" style={{borderRadius:100, backgroundColor:'#DCFCE7', padding: 5}}/> */}
                                    <AntDesign name="plus" size={15} color="green" style={{ borderRadius: 100, backgroundColor: '#DCFCE7', padding: 5 }} />
                                    <Text style={styles.textStatusOffer}>Oferecendo</Text>
                                </View>
                            ) : (
                                <View style={styles.wrapperPrice}>
                                    {/* <AntDesign name="plus" size={18} color="green" style={{borderRadius:100, backgroundColor:'#DCFCE7', padding: 5}}/> */}
                                    <AntDesign name="like" size={15} color="#EA580C" style={{ borderRadius: 100, backgroundColor: '#FFEDD5', padding: 5 }} />
                                    <Text style={styles.textStatusRequest}>Pedindo</Text>
                                </View>
                            )}



                            <Text style={styles.priceTextCard}>R$ {item.value}</Text>

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