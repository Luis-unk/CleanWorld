import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function OrderAccepted() {
  const [orders, setOrders] = useState([]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pedidos Realizados</Text>
      </View>

      {/* Lista de Pedidos */}
      <View style={styles.orderContainer}>
        {orders.map((order) => (
          <View key={order.id} style={styles.orderBox}>
            <View style={styles.orderLeft}>
              <Text style={styles.orderText}>{order.date}</Text>
              <Text style={styles.orderText}>{order.time}</Text>
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
});
