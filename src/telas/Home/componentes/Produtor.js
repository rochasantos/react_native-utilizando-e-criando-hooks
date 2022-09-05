import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

// import { Container } from './styles';

const Produtor = ({nome, imagem, distancia, estrelas}) => {
  return (
    <View style={estilos.cartao}>
      <Image accessibilityLabel="logo" source={imagem} style={imagem} />
      <View style={estilos.informacoes}>
        <View>
          <Text style={estilos.nome}>{nome}</Text>
          <Text>*****</Text>
        </View>
        <Text style={estilos.distancia}>{distancia}</Text>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#f6f6f6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});

export default Produtor;
