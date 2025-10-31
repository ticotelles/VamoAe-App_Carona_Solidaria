import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { z } from 'zod';
import styles from "./styles";

const registerRideRequestSchema = z.object({
    origem: z.string().min(2, { message: "Origem deve ter pelo menos 2 caracteres" }),
    destino: z.string().min(2, { message: "Destino deve ter pelo menos 2 caracteres" }),
    whatsapp: z.string().min(10, { message: "Whatsapp deve ter pelo menos 10 dígitos" }),
    data: z.string().min(10, { message: "Data deve estar no formato DD/MM/AAAA" }),
    hora: z.string().min(5, { message: "Hora deve estar no formato HH:MM" }),
});

type RegisterRideRequestSchema = z.infer<typeof registerRideRequestSchema>;

export default function RegisterRideRequestPage() {
    const navigation = useNavigation<any>();
    const { control, handleSubmit } = useForm<RegisterRideRequestSchema>({
        resolver: zodResolver(registerRideRequestSchema),
    })

    const onSubmit = (data: RegisterRideRequestSchema) => {
        console.log('Dados da solicitação de carona:', data);
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text}>Solicitar Carona</Text>


            <View style={styles.wrapperform}>

                <Controller
                    control={control}
                    name="origem"
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
                    name="destino"
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
                    name="data"
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
                    
                    name="hora"
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