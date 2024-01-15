import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListagemClientes = ({ clientes }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.clienteItem}>
            <Text>{item.nome}</Text>
            <Text>{item.endereco}</Text>
            <Text>{item.contato}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  clienteItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default ListagemClientes;
