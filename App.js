import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProdutoLista from './ProdutoLista';
import ProdutoForm from './ProdutoForm';

import CardapioLista from './CardapioLista';
import CardapioForm from './CardapioForm';

import FuncLista from './FuncLista';
import FuncForm from './FuncForm';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// ----- Produtos -----
function ProdutosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='ListaProd'
        component={ProdutoLista}
        options={{ title: 'Listagem de Produtos' }}
      />
      <Stack.Screen 
        name='NovoProd'
        component={ProdutoForm}
        options={{ title: 'Novo Produto' }}
      />
    </Stack.Navigator>
  );
}

// ----- Cardápio -----
function CardapioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='CardapioLista'
        component={CardapioLista}
        options={{ title: 'Cardápio' }}
      />
      <Stack.Screen 
        name='CardapioForm'
        component={CardapioForm}
        options={{ title: 'Novo Item do Cardápio' }}
      />
    </Stack.Navigator>
  );
}

// ----- Funcionários -----
function FuncStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='FuncLista'
        component={FuncLista}
        options={{ title: 'Funcionários' }}
      />
      <Stack.Screen 
        name='FuncForm'
        component={FuncForm}
        options={{ title: 'Novo Funcionário' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Produtos" component={ProdutosStack} />
        <Tab.Screen name="Cardápio" component={CardapioStack} />
        <Tab.Screen name="Funcionários" component={FuncStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}