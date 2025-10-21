import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function RegisterRidePage() {
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [valor, setValor] = useState('');

    return (
        <View style={styles.container}>

            <Text style={styles.text}>Cadastro de Carona</Text>

               
                <View style={styles.wrapperform}>
                    <TextInput
                        placeholder="Origem"
                        style={styles.input}
                        onChangeText={setOrigem}
                        value={origem}
                        autoCapitalize="words"
                    />
                    <TextInput
                        placeholder="Destino"
                        style={styles.input}
                        onChangeText={setDestino}
                        value={destino}
                        autoCapitalize="words"
                    />
                    <TextInput
                        placeholder="Whatsapp"
                        style={styles.input}
                        onChangeText={setWhatsapp}
                        value={whatsapp}
                        keyboardType="phone-pad"
                        maxLength={15}
                    />
                    <TextInput
                        placeholder="Data - 20/10/2025"
                        style={styles.input}
                        onChangeText={setData}
                        value={data}
                        // formato sugerido: DD/MM/YYYY
                        keyboardType="numeric"
                        maxLength={10}
                    />
                    <TextInput
                        placeholder="Hora - 00:00"
                        style={styles.input}
                        onChangeText={setHora}
                        value={hora}
                        keyboardType="numeric"
                        maxLength={5}
                    />
                    <TextInput
                        placeholder="Valor da Carona"
                        style={styles.input}
                        onChangeText={setValor}
                        value={valor}
                        keyboardType="numeric"
                    />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            

        </View>
    );
}