import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

const getImagem = preenchida => (preenchida ? estrela : estrelaCinza);

const Estrela = ({onPress, desabilitada, preenchida, grande}) => {
  const estilos = estilosFuncao(grande);
  return (
    <TouchableOpacity onPress={onPress} disabled={desabilitada}>
      <Image source={getImagem(preenchida)} style={estilos.estrela} />
    </TouchableOpacity>
  );
};

const estilosFuncao = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 32 : 12,
      height: grande ? 32 : 12,
    },
  });

export default Estrela;
