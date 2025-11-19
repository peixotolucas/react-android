import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function FuncForm({ route, navigation }) {

  const funcionario = route.params?.funcionario;
  const salvar = route.params.salvar;

  const [nome, setNome] = useState(funcionario ? funcionario.nome : '');
  const [cargo, setCargo] = useState(funcionario ? funcionario.cargo : '');

  function salvarDados() {
    const novo = {
      id: funcionario ? funcionario.id : undefined,
      nome,
      cargo
    };
    salvar(novo);
    navigation.goBack();
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Nome:</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, padding: 5, marginBottom: 10 }}
      />

      <Text>Cargo:</Text>
      <TextInput
        value={cargo}
        onChangeText={setCargo}
        style={{ borderWidth: 1, padding: 5, marginBottom: 20 }}
      />

      <Button title="Salvar" onPress={salvarDados} />
    </View>
  );
}