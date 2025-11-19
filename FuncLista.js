import React, { useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import FuncItem from './FuncItem';

export default function FuncLista({ navigation }) {

  const [funcs, setFuncs] = useState([]);

  function adicionarFuncionario() {
    navigation.navigate('FuncForm', {
      salvar: criarFuncionario
    });
  }

  function criarFuncionario(func) {
    setFuncs([...funcs, { ...func, id: Date.now().toString() }]);
  }

  function editarFuncionario(funcAtualizado) {
    setFuncs(funcs.map(f => f.id === funcAtualizado.id ? funcAtualizado : f));
  }

  function abrirEdicao(func) {
    navigation.navigate('FuncForm', {
      funcionario: func,
      salvar: editarFuncionario
    });
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Novo Funcionário" onPress={adicionarFuncionario} />

      <FlatList
        data={funcs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <FuncItem
            item={item}
            onPress={() => abrirEdicao(item)}
          />
        )}
      />

    </View>
  );
}