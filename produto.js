const imgProduto = document.querySelector('.img-produto')
const nomeProduto = document.querySelector('.nome-produto')
const descricaoProduto = document.querySelector('.descricao-produto')
const valorProduto = document.querySelector('.valor-produto')
const tamanhosProduto = document.querySelector('.tamanhos')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')

var queryString = window.location.search.substring(1);
var queryArray = queryString.split("=");
var id = queryArray[1]

if (id === null || id === undefined) {
  window.location.href = "index.html";
}

const preencherProduto = async () => {
  const fetch = await axios.get('./produtos.json')
  const produto = fetch.data.produtos[id - 1]



  nomeProduto.textContent = produto.nome
  descricaoProduto.textContent = produto.desc
  valorProduto.textContent = produto.valor

  for (const tam of produto.tam) {
    const item = document.createElement('li')
    item.textContent = tam
    tamanhosProduto.appendChild(item)
  }


  let index = 0
  imgProduto.src = produto.galeria[index]
  const qtdImgs = produto.galeria.length
  console.log(qtdImgs)

  btnRight.addEventListener('click', () => {
    if (index < qtdImgs - 1) {
      index++
    } else {
      index = 0
    }
    console.log(index<qtdImgs)
    imgProduto.src = produto.galeria[index]
  })
  btnLeft.addEventListener('click', () => {
    if (index > 0) {
      index = index - 1
    } else {
      index = qtdImgs - 1
    }
    console.log(index<qtdImgs, index, qtdImgs)
    imgProduto.src = produto.galeria[index]
  })


}

preencherProduto()