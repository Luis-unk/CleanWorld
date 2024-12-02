import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

export default function LoginGScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const {setIdUser} = useContext(AppContext);
  const {setUserType} = useContext(AppContext);

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      setLoading(false);
      return;
    }
    
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      const { token, userType, idUser } = response.data;

      if (response.data === null){
        setError("Senha invalida")
      }
      setIdUser(idUser);
      
      
      if (token) {
        if( userType === 0 )  {  
          setUserType(userType);
          navigation.navigate('DiscardingProfile', { token, idUser });
          setLoading(false);
        }
      } else {
        setError("Credenciais Inválidas");
        console.log("Token não recebido");
      }
    } catch (error) {    
      setError("Credenciais Inválidas");
      setLoading(false);
      console.error("Erro no login: ", error.response?.data || error.message);
    }
  };

  const handlePreRegister = () => {
    // Navegar para a tela RegisterZeroScreen
    navigation.navigate('Pre-registro'); // Altere o nome da rota conforme necessário
  };

  const handleLoginAsEnterprise = () => {
    // Redirecionar para o login da empresa
    navigation.navigate('LoginGEnterprise'); // Altere para a rota do login da empresa
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image 
            source={require('../../../assets/logo.png')} 
            style={styles.image}
          />
          <Text style={styles.text}>CleanWorld</Text>
        </View>
      </View>

      <View style={styles.loginBox}>
        <Text style={styles.loginTitle}>Login</Text>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {loading ? (
          <ActivityIndicator size="large" color="#007BFF" />
        ) : (
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.registerButton} onPress={handlePreRegister}>
          <Text style={styles.buttonText}>Cadastra-se</Text>
        </TouchableOpacity>

        {/* Botão para redirecionar para o login da empresa */}
        <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleLoginAsEnterprise}>
          <Text style={styles.forgotPasswordText}>Login da Empresa</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#83D07F',
  },
  header: {
    backgroundColor: '#ffffff', // Cor de fundo branco para o cabeçalho
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    elevation: 5, // Sombra para o cabeçalho
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 5,
  },
  text: {
    fontSize: 34,
    color: '#0D0D0D',
  },
  loginBox: {
    backgroundColor: '#ffffff',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 150, // Margem superior para separar o login do cabeçalho
    alignSelf: 'center', // Centralizar o bloco de login na largura
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#83D07F', // Cor de fundo do botão de login
    paddingVertical: 5, // Ajustado para o mesmo tamanho
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10, // Espaço entre os botões
  },
  registerButton: {
    backgroundColor: '#83D07F', // Cor de fundo do botão de cadastro
    paddingVertical: 5, // Ajustado para o mesmo tamanho
    borderRadius: 5,
    alignItems: 'center',
  },
  forgotPasswordButton: {
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: 10,  // Tamanho do botão
    borderRadius: 5,      // Bordas arredondadas
  },
  
  forgotPasswordText: {
    color: '#007BFF',     // Cor azul para o texto
    fontSize: 18,         // Tamanho do texto
    fontWeight: 'bold',   // Deixa o texto em negrito
  },
  
  buttonText: {
    color: '#FFFFFF', // Cor do texto dos botões
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});
