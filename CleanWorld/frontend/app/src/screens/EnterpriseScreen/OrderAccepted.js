import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { format } from 'date-fns';
import { AppContext } from '../../context/AppContext';

export default function OrderAccepted() {
  const [orders, setOrders] = useState([]);
  const {idCollector} = useContext(AppContext);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const getOrders = async () => {
    try{
      const response = await axios.get("http://localhost:8000/api/registerOrder")
      console.log(response.data)
      setOrders(response.data)
    }catch(error){
      console.error("Erro ao buscar informações do pedido: ", error.response?.data || error.message);
    }
  }

  const filterOrders = (collectorId) => {
    if (collectorId) {
      return orders.filter((order) => order.idCollector === collectorId);
    } else {
      return [];
    }
  };

  const formatBirthDate = (date) => {
    if (date) {
      const formattedDate = format(new Date(date), 'dd/MM/yyyy'); 
      return formattedDate;
    }
    return ''; 
  };

  const handleRefreshList = () => {
    getOrders();
  }

  useEffect(()=>{
    getOrders()
  },[])

  useEffect(() => {
    const filtered = filterOrders(idCollector);
    setFilteredOrders(filtered);
  }, [idCollector, orders]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pedidos Aceitos</Text>
      </View>

      {/* Lista de Pedidos */}
      <View style={styles.orderContainer}>
        {filteredOrders.map((order) => (
          <View key={order.id} style={styles.orderBox}>
            <View style={styles.orderLeft}>
              <Text style={styles.orderText}>{formatBirthDate(order.collectionDate)}</Text>
              <Text style={styles.orderText}>{order.collectionTime}</Text>
            </View>
            <View style={styles.orderRight}>
              <Text style={styles.orderText}>Nome: {order.name}</Text>
              <Text style={styles.orderText}>Endereço: {order.address}</Text>
              <Text style={styles.orderText}>Telefone: {order.phone}</Text>
              <Text style={styles.orderText}>Descrição: {order.description}</Text>
            </View>
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={handleRefreshList} style={styles.refreshButton}><Text style={styles.refreshText}>Atualizar</Text></TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#83D07F',
    padding: 10,
  },
  header: {
    backgroundColor: '#83D07F',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 34,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  orderContainer: {
    marginTop: 20,
  },
  orderBox: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  orderLeft: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderRight: {
    flex: 1,
    justifyContent: 'center',
  },
  orderText: {
    fontSize: 16,
    marginBottom: 5,
  },
  refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A0B8B1', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4, 
    elevation: 5, 
  },
  refreshText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10, // Espaço entre o ícone e o texto
  }
});
