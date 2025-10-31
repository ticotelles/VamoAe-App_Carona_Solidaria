import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { z } from 'zod';
import styles from './styles';




const registerUserSchema = z.object({
  fullname: z.string({ message: "Nome é obrigatório" }).min(4, { message: "Nome deve ter no mínimo 4 caracteres" }),
  email: z.string({ message: "Email é obrigatório" }).email({ message: "Email inválido" }),
  whatsapp: z.string({ message: "Whatsapp é obrigatório" }).min(8, { message: "Whatsapp deve ter no mínimo 8 caracteres" }),
  password: z.string({ message: "Senha é obrigatória" }).min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
  confirmPassword: z.string({ message: "Confirmação de senha é obrigatória" }).min(6, { message: "Confirmação de senha deve ter no mínimo 6 caracteres" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas devem ser iguais",
  path: ["confirmPassword"],
});

export type RegisterUserSchema = z.infer<typeof registerUserSchema>;





export default function RegisterUserPage() {
  const { control, handleSubmit } = useForm<RegisterUserSchema>({
    resolver: zodResolver(registerUserSchema),
  });

  const navigation = useNavigation<any>();


  const onSubmit = (data: RegisterUserSchema) => {
    console.log('Dados do formulário:', data);

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Cadastro de Usuário</Text> */}

      <View style={styles.wrapperform}>


        <Controller
          control={control}
          name="fullname"
          render={({ field, fieldState }) => (
            <View>
              <Text style={styles.label}>Nome completo</Text>
              <TextInput
                placeholder="Nome"
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
              />
              {fieldState.error?.message && (
                <Text style={styles.errorText}>{fieldState.error.message}</Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <View>
              <Text style={styles.label}>Email</Text>
              <TextInput
                placeholder="teste@gmail.com"
                autoCapitalize="none"
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
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
                placeholder="9999-9999"
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
              />
              {fieldState.error?.message && (
                <Text style={styles.errorText}>{fieldState.error.message}</Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => (
            <View>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                placeholder="******"
                secureTextEntry
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
              />
              {fieldState.error?.message && (
                <Text style={styles.errorText}>{fieldState.error.message}</Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field, fieldState }) => (
            <View>
              <Text style={styles.label}>Confirmar Senha</Text>
              <TextInput
                placeholder="******"
                secureTextEntry
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
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
