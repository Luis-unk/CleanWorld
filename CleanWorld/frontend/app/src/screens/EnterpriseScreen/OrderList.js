import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [idRegisterOrder, setIdRegisterOrder] = useState('')

  const getOrders = async () => {
    try{
      const response = await axios.get("http://localhost:8000/api/registerOrder")
      console.log(response.data)
      setOrders(response.data)
    }catch(error){
      console.error("Erro no login: ", error.response?.data || error.message);
    }
  }

  useEffect(() => {
    getOrders()
    console.log(orders)
  }, [])

  const handleAccept = (idRegisterOrder) => {
    console.log(`Pedido ${id} aceito!`);
  };

  const handleReject = (idRegisterOrder) => {
    console.log(`Pedido ${id} recusado!`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pedidos Realizados</Text>
      </View>

      {/* Lista de Pedidos */}
      <View style={styles.orderContainer}>
        {orders.map((order) => (
          <View key={order.idRegisterOrder} style={styles.orderBox}>
            <View style={styles.orderLeft}>
              <Text style={styles.orderText}>{order.collectionDate}</Text>
              <Text style={styles.orderText}>{order.collectionTime}</Text>
            </View>
            <View style={styles.orderRight}>
              <Text style={styles.orderText}>Nome: {order.name}</Text>
              <Text style={styles.orderText}>Endereço: {order.address}</Text>
              <Text style={styles.orderText}>Telefone: {order.phone}</Text>
              <Text style={styles.orderText}>Descrição: {order.materialDescription}</Text>

              {/* Botões Aceitar e Recusar */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.acceptButton}
                  onPress={() => handleAccept(order.id)}
                >
                  <Text style={styles.buttonText}>Aceitar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.rejectButton}
                  onPress={() => handleReject(order.id)}
                >
                  <Text style={styles.buttonText}>Recusar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 10,
  },
  rejectButton: {
    backgroundColor: '#F44336',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
