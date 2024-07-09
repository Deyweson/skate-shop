const imgProduto = document.querySelector('.img-produto')
const nomeProduto = document.querySelector('.nome-produto')
const descricaoProduto = document.querySelector('.descricao-produto')
const valorProduto = document.querySelector('.valor-produto')
const tamanhosProduto = document.querySelector('.tamanhos')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const whatsappBtn = document.querySelector('.whatsapp-btn')

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

  btnRight.addEventListener('click', () => {
    if (index < qtdImgs - 1) {
      index++
    } else {
      index = 0
    }
    imgProduto.src = produto.galeria[index]
  })
  btnLeft.addEventListener('click', () => {
    if (index > 0) {
      index = index - 1
    } else {
      index = qtdImgs - 1
    }
    imgProduto.src = produto.galeria[index]
  })

  var agora = new Date()
  var horas = agora.getHours()
  var saudacao = ""
  if (horas < 12) {
    saudacao = "Bom dia"
  } else if (horas < 18) {
    saudacao = "Boa tarde"
  } else {
    saudacao = "Boa noite"
  }


  var numeroTelefone = '5524999711940'
  var mensagem = `${saudacao}. Gostaria de saber se o(a) ${produto.nome} ainda está disponível?`
  var mensagemEncoded = encodeURIComponent(mensagem)
  var link = `https://wa.me/${numeroTelefone}?text=${mensagemEncoded}`
  whatsappBtn.href = link
}

preencherProduto()