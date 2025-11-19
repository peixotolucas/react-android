import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export default function FuncItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{
      padding: 15,
      borderBottomWidth: 1,
      borderColor: '#ccc'
    }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.nome}</Text>
      <Text>Cargo: {item.cargo}</Text>
    </TouchableOpacity>
  );
}