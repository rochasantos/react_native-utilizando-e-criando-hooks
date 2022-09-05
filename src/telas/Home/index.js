import React from 'react';
import {View, StyleSheet} from 'react-native';

import Produtores from './componentes/Produtores';

export default function Home() {
  return (
    <View style={estilos.tela}>
      <Produtores />
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    //flex: 1,
  },
});
