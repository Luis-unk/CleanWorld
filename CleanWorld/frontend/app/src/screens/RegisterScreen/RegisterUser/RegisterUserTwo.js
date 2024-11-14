import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from "axios";

export default function RegisterUserTwo({ navigation , route}) {
  const {name, cpf, phone, birthDate, userType} = route.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = async () => {  
    try {
      const response = await axios.post("http://localhost:8000/api/user", {
        name,
        cpf, 
        phone, 
        birthDate,
        userType, 
        email,
        password
      });
      console.log(response.data);
      navigation.navigate("Login");
  
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
          <Image 
            source={require('../../../../assets/—Pngtree—green leaves vector icon design_5224035.png')} 
            style={styles.image}
          />
          <Text style={styles.text}>CleanWorld</Text>
        </View>

      <View style={styles.loginBox}>
        <Text style={styles.loginTitle}>Registro</Text>
        
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
        />
        
        <Button title="Finalizar Cadastro" 
        onPress={handleRegister} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#83D07F',
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
    elevation: 6
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
    marginBottom: 20
  },
});
