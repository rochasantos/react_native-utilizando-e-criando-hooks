import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';

import useProdutores from '../../../hooks/useProdutores.js';

import Topo from './Topo.js';
import Produtor from './Produtor.js';

export default function Produtores() {
  const [titulo, lista] = useProdutores();

  return (
    <FlatList
      data={lista}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={() => (
        <>
          <Topo />
          <Text style={estilos.titulo}>{titulo}</Text>
        </>
      )}
      renderItem={({item}) => <Produtor {...item} />}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginTop: 16,
    marginHorizontal: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
