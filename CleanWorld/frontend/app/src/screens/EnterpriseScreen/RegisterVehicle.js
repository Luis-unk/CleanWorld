import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function RegisterVehicle({ navigation }) {
  const [volumeSize, setVolumeSize] = useState(''); // Novo estado para rastrear a seleção
  const [carBrand, setcarBrand] = useState('');
  const [carModel, setcarModel] = useState('');
  const [carLicencePlate, setcarLicencePlate] = useState('');
  const [maximumweight, setMaximumWeight] = useState('');

  const handleSaveChanges = async () => {
    try {

      console.log({ volumeSize, carBrand, carModel, carLicencePlate, maximumweight });

      const response = await axios.post(`http://localhost:8000/registerVehicle`, {
        volumeSize,
        carBrand,
        carModel,         
        carLicencePlate,
        maximumweight,
      });
      console.log({ volumeSize, carBrand, carModel, carLicencePlate, maximumweight });

      console.log('Veículo cadastrado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao salvar o veículo:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastro de Veículo</Text>
      </View>

      <View style={styles.profileBox}>
        {/* Opções de seleção para o tamanho do volume */}
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

        {/* Campos de entrada restantes */}
        <Text style={styles.label}>Marca</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Toyota"
          value={carBrand}
          onChangeText={setcarBrand}
        />

        <Text style={styles.label}>Modelo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Hilux"
          value={carModel}
          onChangeText={setcarModel}
        />

        <Text style={styles.label}>Placa</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: ABC-1234"
          value={carLicencePlate}
          onChangeText={setcarLicencePlate}
        />

        <Text style={styles.label}>Peso Máximo (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 2000 kg"
          value={maximumweight}
          onChangeText={setMaximumWeight}
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
