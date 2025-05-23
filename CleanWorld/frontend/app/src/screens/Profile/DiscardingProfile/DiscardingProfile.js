import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { format } from 'date-fns';
import { AppContext } from '../../../context/AppContext';

export default function DiscardingProfile({ navigation }) {
  const { idUser , setUserType, setIdUser} = useContext(AppContext);
  console.log(idUser);

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fetchDiscarderData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/user/${idUser}`);
      console.log(response.data);
      const { name, cpf, phone, birthDate, email, password } = response.data[0];
      setName(name || '');
      setCpf(cpf || '');
      setPhone(phone || '');
      setBirthDate(formatBirthDate(birthDate) || '');
      setPassword(password || '');
      setEmail(email || '');
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };

  useEffect(() => {
    fetchDiscarderData();
  }, []);

  const formatBirthDate = (date) => {
    if (date) {
      const formattedDate = format(new Date(date), 'dd/MM/yyyy');
      return formattedDate;
    }
    return '';
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:8000/api/user/${idUser}`, {
        name,
        cpf, // CPF é enviado, mas permanece não editável no formulário
        phone,
        birthDate,
        email,
        password,
      });
      alert('Alterações salvas com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar as alterações:', error);
      alert('Erro ao salvar as alterações.');
    }
  };

  const handleLogout = () => { 
    setUserType('');
    setIdUser('');
    navigation.navigate('Login');
};

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.exitButton} 
        onPress={handleLogout}
      >
        <Text style={styles.exitButtonText}>Logout</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil do Descartante</Text>
      </View>

      <View style={styles.profileBox}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={[styles.input, styles.inputDisabled]}
          placeholder="CPF"
          value={cpf}
          editable={false} // Impede edição do CPF
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
          placeholder="(DD/MM/AAAA)"
          value={birthDate}
          onChangeText={setBirthDate}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Salvar Alterações</Text>
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
  inputDisabled: {
    backgroundColor: '#f8f9fa', // Fundo cinza claro
    color: '#6c757d', // Texto em tom mais claro
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
  exitButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
});
