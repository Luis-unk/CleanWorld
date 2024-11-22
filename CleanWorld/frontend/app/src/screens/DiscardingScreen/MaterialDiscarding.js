import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

export default function MaterialDiscarding({ navigation }) {
  const {idUser} = useContext(AppContext);
  console.log(idUser);
  const [quantityVolume, setQuantityVolume] = useState('');
  const [volumeSize, setVolumeSize] = useState('');
  const [collectionDate, setCollectionDate] = useState('');
  const [collectionTime, setCollectionTime] = useState('');
  const [materialDescription, setMaterialDescription] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState(0); // Padrão para quem cria o pedido -> 0 representa que o pedido foi feito e esta aguardando ser aceito

  const handleSaveChanges = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/registerOrder', {
        quantityVolume,
        volumeSize,
        collectionDate,
        collectionTime,
        address,
        materialDescription,
        status,
        idUser
      });
      console.log('Pedido realizado com sucesso:', response.data);
      clearInput();
      Alert.alert("Material Registrado!")
    } catch (error) {
      console.error('Erro ao realizar o pedido:', error);
    }
  };

  const clearInput = () => {
    setCollectionDate(''),
    setCollectionTime(''),
    setMaterialDescription(''),
    setVolumeSize(''),
    setQuantityVolume(''),
    setAddress('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Informações do Material</Text>
      </View>

      <View style={styles.profileBox}>
        {/* Quantidade de Volumes */}
        <Text style={styles.label}>Quantidade de Volumes</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 5"
          value={quantityVolume}
          onChangeText={setQuantityVolume}
          keyboardType="numeric"
        />

        {/* Tamanho do Volume */}
        <Text style={styles.sectionTitle}>Tamanho do Volume</Text>
        <View style={styles.volumeOptions}>
          <TouchableOpacity
            style={[
              styles.volumeOption,
              volumeSize === 'Pequeno' && styles.selectedOption,
            ]}
            onPress={() => setVolumeSize('Pequeno')}
          >
            <Text
              style={[
                styles.optionText,
                volumeSize === 'Pequeno' && styles.selectedOptionText,
              ]}
            >
              Pequeno
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.volumeOption,
              volumeSize === 'Médio' && styles.selectedOption,
            ]}
            onPress={() => setVolumeSize('Médio')}
          >
            <Text
              style={[
                styles.optionText,
                volumeSize === 'Médio' && styles.selectedOptionText,
              ]}
            >
              Médio
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.volumeOption,
              volumeSize === 'Grande' && styles.selectedOption,
            ]}
            onPress={() => setVolumeSize('Grande')}
          >
            <Text
              style={[
                styles.optionText,
                volumeSize === 'Grande' && styles.selectedOptionText,
              ]}
            >
              Grande
            </Text>
          </TouchableOpacity>
        </View>

        {/* Data e Hora */}
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Data de Coleta</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 2024-11-18"
              value={collectionDate}
              onChangeText={setCollectionDate}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Horário</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 14:00"
              value={collectionTime}
              onChangeText={setCollectionTime}
            />
          </View>
        </View>

        <Text style={styles.label}>Endereço</Text>
        <TextInput
          style={styles.input}
          placeholder="Rua, n°"
          value={address}
          onChangeText={setAddress}
        />

        {/* Descrição do Material */}
        <Text style={styles.label}>Descrição do Material</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Detalhe o material aqui..."
          value={materialDescription}
          onChangeText={setMaterialDescription}
          multiline
        />

        {/* Botão Realizar Pedido */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Realizar Pedido</Text>
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
  textArea: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    height: 100,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  volumeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  volumeOption: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ced4da',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  selectedOption: {
    backgroundColor: '#83D07F',
    borderColor: '#83D07F',
  },
  optionText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedOptionText: {
    color: '#FFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
  },
  saveButton: {
    backgroundColor: '#83D07F',
    paddingVertical: 15,
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
