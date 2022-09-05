import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

import {carregaProdutores} from '../../../servicos/carregaDados.js';

export default function Produtores() {
  const [produtores, setProdutores] = useState([]);

  useEffect(() => {
    const {lista} = carregaProdutores();
    setProdutores(lista);
  }, []);

  return <Text>Produtores</Text>;
}
