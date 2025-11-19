import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import CardapioItem from './CardapioItem';

export default function CardapioLista({ navigation }) {

    const [itens, setItens] = useState([]);

    // Navegar para o formulário com callback
    const novoItem = () => {
        navigation.navigate('CardapioForm', {
            salvarItem: salvarItem
        });
    };

    // Recebe o item vindo do formulário e adiciona na lista
    const salvarItem = (item) => {
        const novo = { ...item, id: Date.now().toString() };
        setItens([...itens, novo]);
    };

    return (
        <View style={styles.container}>
            {itens.length === 0 && (
                <Text style={styles.vazio}>Nenhum item no cardápio ainda.</Text>
            )}

            <FlatList
                data={itens}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CardapioItem item={item} />
                )}
            />

            <TouchableOpacity style={styles.botao} onPress={novoItem}>
                <Text style={styles.botaoTexto}>Adicionar Item</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    vazio: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 16,
        color: '#555'
    },
    botao: {
        backgroundColor: '#3498db',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10
    },
    botaoTexto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});