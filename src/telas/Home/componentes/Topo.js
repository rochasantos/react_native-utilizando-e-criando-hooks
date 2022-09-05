import React, {Component} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

import logo from '../../../assets/logo.png';

import {carregaTopo} from '../../../servicos/carregaDados.js';

class Topo extends Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    },
  };

  atualizaTopo() {
    return carregaTopo();
  }

  componentDidMount() {
    const topoAtualizado = this.atualizaTopo();
    this.setState({
      topo: topoAtualizado,
    });
  }

  render() {
    const {boasVindas, legenda} = this.state.topo;
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{boasVindas}</Text>
        <Text>{legenda}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646'
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3'
  },
});

export default Topo;
