import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';


export default function RegisterUserPage() {
    const navigation = useNavigation<any>();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Cadastro de Usuário</Text>

            <View style={styles.wrapperform}>
                <TextInput
                    placeholder="Nome"
                    style={styles.input}
                // onChangeText={setText}
                // value={text}
                />
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                // onChangeText={setText}
                // value={text}
                />
                <TextInput
                    placeholder="Whatsapp"
                    style={styles.input}
                // onChangeText={setText}
                // value={text}
                />
                <TextInput
                    placeholder="Senha"
                    style={styles.input}
                // onChangeText={setText}
                // value={text}
                />
                <TextInput
                    placeholder="Confirmar Senha"
                    style={styles.input}
                // onChangeText={setText}
                // value={text}
                />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate('Home')}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}