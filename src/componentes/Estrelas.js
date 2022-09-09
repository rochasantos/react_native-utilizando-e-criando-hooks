import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Estrela from './Estrela.js';

const Estrelas = ({
  quantidade: quantidadeAntiga,
  editavel = true,
  grande = false,
}) => {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);

  const RenderEstrelas = () => {
    const estrelas = [];

    for (let i = 0; i < 5; i++) {
      estrelas.push(
        <Estrela
          key={i}
          onPress={() => setQuantidade(i + 1)}
          desabilitada={editavel}
          preenchida={i < quantidade}
          grande={!editavel}
        />,
      );
    }

    return estrelas;
  };

  return (
    <View style={estilos.container}>
      <RenderEstrelas />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Estrelas;
