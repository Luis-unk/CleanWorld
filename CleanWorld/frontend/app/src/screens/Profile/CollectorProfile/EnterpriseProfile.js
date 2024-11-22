import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function EnterpriseProfile({ navigation, route }) {
  const { idCollector } = route.params;
  console.log(idCollector);

  const [nameEnterprise, setNameEnterprise] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para buscar os dados no backend
  const fetchEnterpriseData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/collector/${idCollector}`); // Substitua '1' pelo ID do usuário/empresa

      const { nameEnterprise, cnpj, phone, email, password } = response.data[0];
      setNameEnterprise(nameEnterprise);
      setCnpj(cnpj);
      setPhone(phone);
      setEmail(email);
      setPassword(password);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };

  useEffect(() => {
    fetchEnterpriseData();
  }, []);

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:8000/api/collector/${idCollector}`, {
        nameEnterprise,
        cnpj,
        phone,
        email, 
        password
      });
      alert('Alterações salvas com sucesso!');  
    } catch (error) {
      console.error('Erro ao salvar as alterações:', error);
      alert('Erro ao salvar as alterações.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil da Empresa</Text>
      </View>

      <View style={styles.profileBox}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nameEnterprise}
          onChangeText={setNameEnterprise}
        />

        <Text style={styles.label}>CNPJ</Text>
        <TextInput
          style={styles.input}
          placeholder="CNPJ"
          value={cnpj}
          onChangeText={setCnpj}
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={phone}
          onChangeText={setPhone}
        />

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

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Salvar Alteração</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#83D07F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#83D07F',
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 34,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  profileBox: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: '#83D07F',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
