import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { z } from 'zod';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './styles';

// const loginSchema = z.object({
//   email: z.string().email({ message: "Email inválido" }),
//   password: z.string().min(4, { message: "Senha deve ter no mínimo 6 caracteres" }),
// });

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});


export type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigation = useNavigation<any>();
  const { control, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const [apiError, setApiError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { signIn } = useContext(AuthContext);

  const onSubmit = async (data: LoginSchema) => {
    setApiError(null);
    setLoading(true);
    try {
      await signIn(data.email, data.password);
      setLoading(false);
      navigation.navigate('Home');
    } catch (err: any) {
      setApiError(err?.message || 'Erro ao autenticar');
      setLoading(false);
    }
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
            {loading ? <ActivityIndicator color="#000" /> : <Text>Entrar</Text>}
          </TouchableOpacity>

          {apiError ? <Text style={styles.errorText}>{apiError}</Text> : null}

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