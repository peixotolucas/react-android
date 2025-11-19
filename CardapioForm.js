import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardapioForm({ route, navigation }) {

    const { salvarItem } = route.params;

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');

    const salvar = () => {
        if (!nome || !preco || !categoria) {
            alert("Preencha todos os campos!");
            return;
        }

        salvarItem({
            nome,
            preco,
            categoria
        });

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.label}>Preço</Text>
            <TextInput
                style={styles.input}
                value={preco}
                onChangeText={setPreco}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Categoria</Text>
            <TextInput
                style={styles.input}
                value={categoria}
                onChangeText={setCategoria}
            />

            <TouchableOpacity style={styles.botao} onPress={salvar}>
                <Text style={styles.botaoTexto}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    label: {
        fontSize: 16,
        marginTop: 10
    },
    input: {
        backgroundColor: '#eee',
        padding: 12,
        borderRadius: 6,
        marginTop: 4
    },
    botao: {
        backgroundColor: '#27ae60',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20
    },
    botaoTexto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});