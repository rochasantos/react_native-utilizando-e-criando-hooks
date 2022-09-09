import {useState, useEffect} from 'react';

import {carregaProdutores} from '../servicos/carregaDados';

export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    console.log('chamando useProdutores');
    const produtores = carregaProdutores();
    setTitulo(produtores.titulo);
    setLista(produtores.lista);
  }, []);

  return [titulo, lista];
}