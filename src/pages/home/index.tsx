import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function HomePage() {
    return (
        <View style={styles.container}>
            <View style={styles.cardRide}>
                <View style={styles.wrapperNamePrice}>
                    <Text style={styles.nameTextCard}>Arthur Telles</Text>
                    <Text style={styles.priceTextCard}>R$ 45</Text>
                </View>

                <View style={styles.wrapperOrigemDestino}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../../../assets/images/origemDestinoIcon.png')}
                            style={styles.origemDestinoIcon}
                            resizeMode="contain" />
                        <View style={{ gap: 15 }}>
                            <Text style={styles.originTextCard}>Porteirinha</Text>
                            <Text style={styles.originTextCard}>Montes Claros</Text>
                        </View>
                    </View>
                    <Text style={styles.timeTextCard}> 13:00</Text>
                </View>
                <Text style={{ color: '#9CA3AF', padding: 5 }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Ionicons name="calendar" size={24} color="black" />
                        <Text style={styles.dateTextCard}>20/10/2025</Text>
                    </View>

                    <TouchableOpacity style={styles.buttonContact}>
                        <Text style={styles.contactTextCard}>Contato</Text>
                    </TouchableOpacity>

                </View>


            </View>


        </View>
    )
}