import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';


export default function RegisterUserPage() {
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
                <Text>Registrar</Text>
            </TouchableOpacity>
        </View>
    );
}