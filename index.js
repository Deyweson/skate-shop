const prodSecao = document.querySelector('.produtos')


const produtos = async () => {

  return produtos
}


const exibirShapes = async () => {
  const fetch = await axios.get('./produtos.json')
  const shapes = fetch.data.shapes

  prodSecao.innerHTML = ''

  for (const shape of shapes) {

    const div = document.createElement('div')
    div.classList.add('item')
    div.innerHTML += `<img src="${shape.img}" alt="" class="item-img">
      <p class="${shape.nome}">nome</p>
      <p class="item-valor">${shape.valor}</p>`

    // TODO: Criar função de abrir modal com o produto
    div.addEventListener('click',() => {
      console.log(shape.id)
    })

    prodSecao.appendChild(div)
  }
}


exibirShapes()