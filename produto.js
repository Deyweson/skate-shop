const imgProduto = document.querySelector('.img-produto')
const nomeProduto = document.querySelector('.nome-produto')
const descricaoProduto = document.querySelector('.descricao-produto')
const valorProduto = document.querySelector('.valor-produto')
const tamanhosProduto = document.querySelector('.tamanhos')

var queryString = window.location.search.substring(1);
var queryArray = queryString.split("=");
var id = queryArray[1]



const preencherProduto = async () => {
  const fetch = await axios.get('./produtos.json')
  const produto = fetch.data.produtos[id - 1]

  

  nomeProduto.textContent = produto.nome
  descricaoProduto.textContent = produto.desc
  valorProduto.textContent = produto.valor

  for(const tam of produto.tam) {
    const item = document.createElement('li')
    item.textContent = tam
    tamanhosProduto.appendChild(item)
  }
}

preencherProduto()