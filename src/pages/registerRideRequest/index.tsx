import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { z } from 'zod';
import { fetchWithAuth } from '../../lib/api';
import styles from "./styles";



const registerRideRequestSchema = z.object({
    origin: z.string().min(2, { message: "Origem deve ter pelo menos 2 caracteres" }),
    destination: z.string().min(2, { message: "Destino deve ter pelo menos 2 caracteres" }),
    whatsapp: z.string().min(10, { message: "Whatsapp deve ter pelo menos 10 dígitos" }),
    date: z.string().min(10, { message: "Data deve estar no formato DD/MM/AAAA" }),
    time: z.string().min(5, { message: "Hora deve estar no formato HH:MM" }),
});

type RegisterRideRequestSchema = z.infer<typeof registerRideRequestSchema>;

export default function RegisterRideRequestPage() {
    const navigation = useNavigation<any>();
    const { control, handleSubmit } = useForm<RegisterRideRequestSchema>({
        resolver: zodResolver(registerRideRequestSchema),
    })

    const onSubmit = async (data: RegisterRideRequestSchema) => {
        try {
            console.log('📦 Dados do request ride:', data);

            const resp = await fetchWithAuth('/create-request-ride', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!resp.ok) {
                const err = await resp.json().catch(() => ({}));
                console.error('❌ Erro ao criar request ride', err);
                return;
            }

            navigation.navigate('Home');
        } catch (error) {
            console.error('❌ Erro ao criar carona', error);
        }



    }

    return (
        <View style={styles.container}>

            <Text style={styles.text}>Solicitar Carona</Text>


            <View style={styles.wrapperform}>

                <Controller
                    control={control}
                    name="origin"
                    render={({ field, fieldState }) => (
                        <View >
                            <Text style={styles.label}>Origem</Text>
                            <TextInput
                                placeholder="ex: Porteirinha"
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
                    name="whatsapp"
                    render={({ field, fieldState }) => (
                        <View>
                            <Text style={styles.label}>Whatsapp</Text>
                            <TextInput
                                placeholder="ex: (38) 9 9999-9999"
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
                    name="date"
                    render={({ field, fieldState }) => (
                        <View>
                            <Text style={styles.label}>Data</Text>
                            <TextInput
                                placeholder="ex: 20/10/2025"
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

                    name="time"
                    render={({ field, fieldState }) => (
                        <View>
                            <Text style={styles.label}>Hora</Text>
                            <TextInput
                                placeholder="ex: 13:30"
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
                <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>



        </View>
    )
}