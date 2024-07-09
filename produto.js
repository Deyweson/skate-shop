const imgProduto = document.querySelector('img-produto')
const nomeProduto = document.querySelector('nome-produto')
const descricaoProduto = document.querySelector('descricao-produto')
const valorProduto = document.querySelector('valor-produto')
const tamanhosProduto = document.querySelector('tamanhos')


const preencherProduto = async () => {
  const fetch = await axios.get('./produtos.json')
  const produto = fetch.data
  console.log(produto)
}

preencherProduto()