import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function RegisterVehicle({ navigation }) {
  const [volumeSize, setVolumeSize] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carLicensePlate, setCarLicensePlate] = useState('');
  const [maximumWeight, setMaximumWeight] = useState('');

  const handleSaveChanges = async () => {
    // Convertendo maximumWeight para um número
    const numericMaximumWeight = parseFloat(maximumWeight);

    // Verificando se os campos estão preenchidos
    if (!volumeSize || !carBrand || !carModel || !carLicensePlate || isNaN(numericMaximumWeight)) {
      console.error('Erro: Todos os campos devem ser preenchidos corretamente.');
      return;
    }

    const payload = {
      volumeSize: volumeSize.toUpperCase(), // Convertendo para maiúsculas para atender ao formato esperado (e.g., "SMALL")
      carBrand,
      carModel,
      carLicensePlate,
      maximumWeight: numericMaximumWeight, // Enviando como número
    };

    try {
      console.log('Enviando JSON:', payload);

      const response = await axios.post('http://localhost:8000/api/registerVehicle', payload);

      console.log('Veículo cadastrado com sucesso:', response.data);
      alert('Veículo cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar o veículo:', error);
      alert('Erro ao salvar o veículo. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastro de Veículo</Text>
      </View>

      <View style={styles.profileBox}>
        <Text style={styles.sectionTitle}>Tamanho do Volume</Text>
        <View style={styles.volumeOptions}>
          <TouchableOpacity
            style={[
              styles.volumeOption,
              volumeSize === 'SMALL' && styles.selectedOption,
            ]}
            onPress={() => setVolumeSize('SMALL')}
          >
            <Text
              style={[
                styles.optionText,
                volumeSize === 'SMALL' && styles.selectedOptionText,
              ]}
            >
              Pequeno
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.volumeOption,
              volumeSize === 'MEDIUM' && styles.selectedOption,
            ]}
            onPress={() => setVolumeSize('MEDIUM')}
          >
            <Text
              style={[
                styles.optionText,
                volumeSize === 'MEDIUM' && styles.selectedOptionText,
              ]}
            >
              Médio
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.volumeOption,
              volumeSize === 'LARGE' && styles.selectedOption,
            ]}
            onPress={() => setVolumeSize('LARGE')}
          >
            <Text
              style={[
                styles.optionText,
                volumeSize === 'LARGE' && styles.selectedOptionText,
              ]}
            >
              Grande
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Marca</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Toyota"
          value={carBrand}
          onChangeText={setCarBrand}
        />

        <Text style={styles.label}>Modelo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Hilux"
          value={carModel}
          onChangeText={setCarModel}
        />

        <Text style={styles.label}>Placa</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: ABC-1234"
          value={carLicensePlate}
          onChangeText={setCarLicensePlate}
        />

        <Text style={styles.label}>Peso Máximo (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 1"
          value={maximumWeight}
          onChangeText={setMaximumWeight}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Salvar Veículo</Text>
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
