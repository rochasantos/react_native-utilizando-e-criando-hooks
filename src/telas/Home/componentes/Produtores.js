import React, {useEffect, useState} from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';

import useProdutores from '../../../hooks/useProdutores.js';

import Topo from './Topo.js';
import Produtor from './Produtor.js';

//import {carregaProdutores} from '../../../servicos/carregaDados.js';

export default function Produtores() {
  const [titulo, lista] = useProdutores();
  //const [produtores, setProdutores] = useState([]);
  //const [titulo, setTitulo] = useState('');

  //  useEffect(() => {
  //    const {lista} = carregaProdutores();
  //    setProdutores(lista);
  //  }, []);

  //  useEffect(() => {
  //    const {titulo} = carregaProdutores();
  //    setTitulo(titulo);
  //  }, []);

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
