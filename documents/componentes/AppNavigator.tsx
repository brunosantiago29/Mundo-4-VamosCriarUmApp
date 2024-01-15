// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroFornecedor from './CadastroFornecedor';
import ListagemFornecedores from './ListagemFornecedores';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Listagem">
      <Stack.Screen name="Listagem" component={ListagemFornecedores} />
      <Stack.Screen name="Cadastro" component={CadastroFornecedor} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
