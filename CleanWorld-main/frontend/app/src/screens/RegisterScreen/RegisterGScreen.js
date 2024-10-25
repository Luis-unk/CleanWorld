import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function LoginGScreen({ navigation }) {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [userType, setUserType] = useState('');

  const handleRegister = () => {
    console.log('Nome:', name);
    console.log('CPF:', cpf);
    console.log('Telefone:', phone);
    console.log('Data de Nascimento:', birthDate);
    console.log('Usuário:', userType);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: '/assets/—Pngtree—green leaves vector icon design_5224035.png' }} 
          style={styles.image}
        />
        <Text style={styles.text}>CleanWorld</Text>
      </View>

      <View style={styles.loginBox}>
        <Text style={styles.loginTitle}>Registro</Text>
        
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCpf}
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={phone}
          onChangeText={setPhone}
        />

        <Text style={styles.label}>Data de Nascimento</Text>
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento (DD/MM/AAAA)"
          value={birthDate}
          onChangeText={setBirthDate}
        />

        <Text style={styles.label}>Tipo de Usuário</Text>
        <View style={styles.userTypeContainer}>
          <TouchableOpacity 
            style={[styles.userTypeButton, userType === 'descartante' && styles.selectedUserType]} 
            onPress={() => setUserType('descartante')}
          />
          <Text style={styles.userTypeText}>Descartante</Text>
          
          <TouchableOpacity 
            style={[styles.userTypeButton, userType === 'coletor' && styles.selectedUserType]} 
            onPress={() => setUserType('coletor')}
          />
          <Text style={styles.userTypeText}>Coletor</Text>
        </View>
        
        <Button title="Cadastre-se" onPress={handleRegister} />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    alignItems: 'center',
  },
  userTypeButton: {
    width: 30,  
    height: 30,
    borderRadius: 15, 
    borderWidth: 2,
    borderColor: '#ced4da',
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
  },
  selectedUserType: {
    backgroundColor: '#83D07F', 
  },
  userTypeText: {
    fontWeight: 'bold', 
  },
});
