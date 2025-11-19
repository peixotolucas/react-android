import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardapioItem({ item }) {
    return (
        <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {item.preco}</Text>
            <Text style={styles.categoria}>{item.categoria}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        elevation: 2
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    preco: {
        fontSize: 16,
        marginTop: 4
    },
    categoria: {
        fontSize: 14,
        marginTop: 6,
        color: '#777'
    }
});