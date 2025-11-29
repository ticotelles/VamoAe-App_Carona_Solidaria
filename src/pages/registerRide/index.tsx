import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { Controller, useForm } from 'react-hook-form';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { z } from 'zod';
import { fetchWithAuth } from '../../lib/api';
import styles from "./styles";


const registerRideSchema = z.object({
    origin: z.string().min(2, { message: "Origem deve ter pelo menos 2 caracteres" }),
    destination: z.string().min(2, { message: "Destino deve ter pelo menos 2 caracteres" }),
    whatsapp: z.string().min(10, { message: "Whatsapp deve ter pelo menos 10 dígitos" }),
    date: z.string().min(10, { message: "Data deve estar no formato DD/MM/AAAA" }),
    time: z.string().min(5, { message: "Hora deve estar no formato HH:MM" }),
    value: z.string().min(1, { message: "Valor é obrigatório" }),
});

type RegisterRideSchema = z.infer<typeof registerRideSchema>;

export default function RegisterRidePage() {
    const navigation = useNavigation<any>();
    const { control, handleSubmit } = useForm<RegisterRideSchema>({
        resolver: zodResolver(registerRideSchema),
    });

    const onSubmit = async (data: RegisterRideSchema) => {
            try {
            console.log('📦 Dados do cadastro:', data);

            const resp = await fetchWithAuth('/create-ride', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!resp.ok) {
                const err = await resp.json().catch(() => ({}));
                console.error('❌ Erro ao criar carona', err);
                return;
            }

            navigation.navigate('Home');
        } catch (error) {
            console.error('❌ Erro ao criar carona', error);
        }
       
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Cadastro de Carona</Text>

            <View style={styles.wrapperform}>
                <Controller
                    control={control}
                    name="origin"
                    render={({ field, fieldState }) => (
                        <View>
                            <Text style={styles.label}>Origem</Text>
                            <TextInput
                                placeholder="ex: Montes Claros"
                                style={styles.input}
                                onChangeText={field.onChange}
                                value={field.value}
                                autoCapitalize="words"
                            />
                            {fieldState.error?.message && (
                                <Text style={styles.errorText}>{fieldState.error.message}</Text>
                            )}
                        </View>
                    )}
                />

                <Controller
                    control={control}
                    name="destination"
                    render={({ field, fieldState }) => (
                        <View>
                            <Text style={styles.label}>Destino</Text>
                            <TextInput
                                placeholder="ex: Belo Horizonte"
                                style={styles.input}
                                onChangeText={field.onChange}
                                value={field.value}
                                autoCapitalize="words"
                            />
                            {fieldState.error?.message && (
                                <Text style={styles.errorText}>{fieldState.error.message}</Text>
                            )}
                        </View>
                    )}
                />

                <Controller
                    control={control}
                    name="whatsapp"
                    render={({ field, fieldState }) => (
                        <View>
                            <Text style={styles.label}>Whatsapp</Text>
                            <TextInput
                                placeholder="ex: (31) 99999-9999"
                                style={styles.input}
                                onChangeText={field.onChange}
                                value={field.value}
                                keyboardType="phone-pad"
                                maxLength={15}
                            />
                            {fieldState.error?.message && (
                                <Text style={styles.errorText}>{fieldState.error.message}</Text>
                            )}
                        </View>
                    )}
                />

                <Controller
                    control={control}
                    name="date"
                    render={({ field, fieldState }) => (
                        <View>
                            <Text style={styles.label}>Data</Text>
                            <TextInput
                                placeholder="ex: 31/12/2023"
                                style={styles.input}
                                onChangeText={field.onChange}
                                value={field.value}
                                keyboardType="numeric"
                                maxLength={10}
                            />
                            {fieldState.error?.message && (
                                <Text style={styles.errorText}>{fieldState.error.message}</Text>
                            )}
                        </View>
                    )}
                />

                <Controller
                    control={control}
                    name="time"
                    render={({ field, fieldState }) => (
                        <View>
                            <Text style={styles.label}>Hora</Text>
                            <TextInput
                                placeholder="ex: 14:30"
                                style={styles.input}
                                onChangeText={field.onChange}
                                value={field.value}
                                keyboardType="numeric"
                                maxLength={5}
                            />
                            {fieldState.error?.message && (
                                <Text style={styles.errorText}>{fieldState.error.message}</Text>
                            )}
                        </View>
                    )}
                />

                <Controller
                    control={control}
                    name="value"
                    render={({ field, fieldState }) => (
                        <View>
                            <Text style={styles.label}>Valor</Text>
                            <TextInput
                                placeholder="ex: 40"
                                style={styles.input}
                                onChangeText={field.onChange}
                                value={field.value}
                                keyboardType="numeric"
                            />
                            {fieldState.error?.message && (
                                <Text style={styles.errorText}>{fieldState.error.message}</Text>
                            )}
                        </View>
                    )}
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}