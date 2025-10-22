import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

// import { FormControl } from '@/components/ui/form-control';



export default function LoginPage() {
  const navigation = useNavigation<any>();
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  return (
 
        <View style={styles.container}>
          <Image
       
            source={require('../../../assets/images/logo1.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={setText}
            value={text}
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            onChangeText={setPassword}
            value={String(password)}
          />
          <TouchableOpacity style={styles.buttonLogin}>
            <Text>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.wrapperCadastro}>
            <Text style={styles.textNaoCadastro}>Não possui cadastro?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterUser')}>
              <Text style={styles.textCadastro}>Cadastre-se</Text>
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