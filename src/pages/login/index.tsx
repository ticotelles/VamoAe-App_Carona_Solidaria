import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { z } from 'zod';
import styles from './styles';

const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(4, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigation = useNavigation<any>();
  const { control, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log('dados login:', data);
    navigation.navigate('Home');
  };


  return (
 
        <View style={styles.container}>
          <Image
       
            source={require('../../../assets/images/logo1.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState}) => (
              <>
                <TextInput
                  placeholder="Email"
                  style={styles.input}
                  onChangeText={field.onChange}
                  value={field.value}
                 />
                  {fieldState.error?.message && (
                    <Text style={styles.errorText}>{fieldState.error.message}</Text>
                  )}
              </> 
            )}
          
          />
         
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState}) => (
              <>
                <TextInput
                  placeholder="Senha"
                  secureTextEntry
                  style={styles.input}
                  onChangeText={field.onChange}
                  value={field.value}
                 />
                  {fieldState.error?.message && (
                    <Text style={styles.errorText}>{fieldState.error.message}</Text>
                  )}
              </> 
            )}
          
          />
          <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit(onSubmit)}>
            <Text>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.wrapperCadastro}>
            <Text style={styles.textNaoCadastro} onPress={() => navigation.navigate('Home')}>Não possui cadastro?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterUser')}>
              <Text style={styles.textCadastro} >Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
  );
}

//  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      
//       <View style={Styles.container}>
//         <Text>Login Pageeee</Text>
//       </View>
//     </KeyboardAvoidingView>