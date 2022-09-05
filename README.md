# React Native: utilizando e criando Hooks

## Aula 2
### Criando mocks e servicos
Foi criada a pasta `mocks` que contem os mocks _topo_ e _produtores_ que irá simular nossos dados vindo da api.
A pasta `servico` foi criada com o propósito de simular o recebimento desses dados. O arquivo `carregaDados.js`. Destro deste arquivo há duas funções _carregaTopo_ e `carregaProdutores` que retornam, respectivamente, o topo e os produtores.
### Consumindo o serviço
Dentro de `Topo.js` importamos _carregaTopo_ e mudamos de componente de função para **componente de classe** para entendermos o ciclo de vida do componente react. Criamos o método _atualizaTopo_ - que retorna a função _carregaTopo_ - e invocamos ela dentro da função _componentDidMount_ (que faz parte do ciclo de vida do react) que será executada quando o componente tiver sido montado.
### Salvando no estado
Declaramos o objeto topo dentro do _state_ e setamos seus valores dentro do _componentDidMount()_ utilizando o _setState()_.
## Aula 3
### Lista de produtores
Adicionamos a cor do estilo _boasVindas_ e _legenda_ para respectivamente `"#464646"` e `"#a3a3a3"`
Criamos o componente de função `Produtores.js.` Adicionamos a ele o hook _useEffect()_ substituindo o _componentDidMount_. Para isso o array passado no segundo parâmetro da função foi passado vazio. Foi passado um ```js<Text>Produtores</Text>``` para testa-lo adicionando no `index.js` da pasta `Home` juntamente com o `Topo`.
### Armazenando produtores
```js
// no começo da função
const [titulo, setTitulo] = useState('')
const [lista, setLista] = useState([])

// dentro de useEffect()
setTitulo(carregaProdutores().titulo)
setTitulo(carregaProdutores().lista)
```
Utilizamos o <FlatList> para passarmos a lista de produtores
Utilizamos os atributos do FlatList: data, renderItem, ListHeaderComponent
Foi criado uma função TituloLista para organizar nosso código
Estilizamos o título
 