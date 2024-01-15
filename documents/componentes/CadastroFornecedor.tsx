import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const CadastroFornecedor = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');

  const cadastrarFornecedor = () => {
    // Lógica para cadastrar o fornecedor
  };

  return (
    <View>
      <TextInput placeholder="Nome do Fornecedor" value={nome} onChangeText={setNome} />
      <TextInput placeholder="Endereço" value={endereco} onChangeText={setEndereco} />
      <TextInput placeholder="Contato" value={contato} onChangeText={setContato} />
      <Button title="Cadastrar" onPress={cadastrarFornecedor} />
    </View>
  );
};

export default CadastroFornecedor;
