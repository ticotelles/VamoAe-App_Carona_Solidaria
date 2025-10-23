import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import { z } from 'zod';
import styles from "./styles";

const registerRideSchema = z.object({
    origem: z.string().min(2, { message: "Origem deve ter pelo menos 2 caracteres" }),
    destino: z.string().min(2, { message: "Destino deve ter pelo menos 2 caracteres" }),
    whatsapp: z.string().min(10, { message: "Whatsapp deve ter pelo menos 10 dígitos" }),
    data: z.string().min(10, { message: "Data deve estar no formato DD/MM/AAAA" }),
    hora: z.string().min(5, { message: "Hora deve estar no formato HH:MM" }),
    valor: z.string().min(1, { message: "Valor é obrigatório" }),
});

type RegisterRideSchema = z.infer<typeof registerRideSchema>;

export default function RegisterRidePage() {
    const navigation = useNavigation<any>();
    const { control, handleSubmit } = useForm<RegisterRideSchema>({
        resolver: zodResolver(registerRideSchema),
    });

    const onSubmit = (data: RegisterRideSchema) => {
        console.log('Dados do cadastro:', data);
        navigation.navigate('Home');
    };

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Text style={styles.text}>Cadastro de Carona</Text>

            <View style={styles.wrapperform}>
                <Controller
                    control={control}
                    name="origem"
                    render={({ field, fieldState }) => (
                        <>
                            <TextInput
                                placeholder="Origem"
                                style={styles.input}
                                onChangeText={field.onChange}
                                value={field.value}
                                autoCapitalize="words"
                            />
                            {fieldState.error?.message && (
                                <Text style={styles.errorText}>{fieldState.error.message}</Text>
                            )}
                        </>
                    )}
                />

                <Controller
                    control={control}
                    name="destino"
                    render={({ field, fieldState }) => (
                        <>
                            <TextInput
                                placeholder="Destino"
                                style={styles.input}
                                onChangeText={field.onChange}
                                value={field.value}
                                autoCapitalize="words"
                            />
                            {fieldState.error?.message && (
                                <Text style={styles.errorText}>{fieldState.error.message}</Text>
                            )}
                        </>
                    )}
                />

                <Controller
                    control={control}
                    name="whatsapp"
                    render={({ field, fieldState }) => (
                        <>
                            <TextInput
                                placeholder="Whatsapp"
                                style={styles.input}
                                onChangeText={field.onChange}
                                value={field.value}
                                keyboardType="phone-pad"
                                maxLength={15}
                            />
                            {fieldState.error?.message && (
                                <Text style={styles.errorText}>{fieldState.error.message}</Text>
                            )}
                        </>
                    )}
                />

                <Controller
                    control={control}
                    name="data"
                    render={({ field, fieldState }) => (
                        <>
                            <TextInput
                                placeholder="Data - DD/MM/AAAA"
                                style={styles.input}
                                onChangeText={field.onChange}
                                value={field.value}
                                keyboardType="numeric"
                                maxLength={10}
                            />
                            {fieldState.error?.message && (
                                <Text style={styles.errorText}>{fieldState.error.message}</Text>
                            )}
                        </>
                    )}
                />

                <Controller
                    control={control}
                    name="hora"
                    render={({ field, fieldState }) => (
                        <>
                            <TextInput
                                placeholder="Hora - HH:MM"
                                style={styles.input}
                                onChangeText={field.onChange}
                                value={field.value}
                                keyboardType="numeric"
                                maxLength={5}
                            />
                            {fieldState.error?.message && (
                                <Text style={styles.errorText}>{fieldState.error.message}</Text>
                            )}
                        </>
                    )}
                />

                <Controller
                    control={control}
                    name="valor"
                    render={({ field, fieldState }) => (
                        <>
                            <TextInput
                                placeholder="Valor da Carona"
                                style={styles.input}
                                onChangeText={field.onChange}
                                value={field.value}
                                keyboardType="numeric"
                            />
                            {fieldState.error?.message && (
                                <Text style={styles.errorText}>{fieldState.error.message}</Text>
                            )}
                        </>
                    )}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}