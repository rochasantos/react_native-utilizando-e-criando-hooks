import {useState, useEffect} from 'react';

import {carregaProdutores} from '../servicos/carregaDados';

export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const produtores = carregaProdutores();
    setTitulo(produtores.titulo);
    setLista(produtores.lista.sort((d1, d2) => d1.distancia - d2.distancia));
  }, []);

  return [titulo, lista];
}
