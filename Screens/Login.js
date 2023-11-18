import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Style/Login';

export default function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleEsqueciSenha = () => {
    Alert.alert('Esqueci a senha', 'Um e-mail de redefinição de senha será enviado para o seu email.');
  };

  const Entrar = () => {
    if (nome === 'usuario' && senha === 'senha') {
      Alert.alert('Erro', 'Usuário ou senha inválidos');
    } else {
      navigation.navigate('Inicio');
    }
  
  };

  const Visitante = () => {
    navigation.navigate('Inicio');
  };
 
  return (

    <View style={styles.container}>
      <Image style={styles.Image} source={require('../assets/icon.png')} />

      <TextInput
        style={styles.TextEmail}
        placeholder="Digite seu CPF"
        value={nome}
        onChangeText={text => setNome(text)}
      />

      <TextInput
        style={styles.TextSenha}
        placeholder="********"
        secureTextEntry={true}
        value={senha}
        onChangeText={text => setSenha(text)}
      />

      <TouchableOpacity style={styles.esqueciSenha} onPress={handleEsqueciSenha}>
        <Text style={{ textAlign: 'center' }}>Esqueci a senha</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.btnCadastro} onPress={Entrar}>
        <Text style={{  textAlign: 'center' }}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Visitante} onPress={Visitante}>
        <Text style={{ textAlign: 'center' }}>Entrar como visitante</Text>
      </TouchableOpacity>
     
    </View>
  );
}

