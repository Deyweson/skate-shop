const prodSecao = document.querySelector('.produtos')


const produtos = async () => {

  return produtos
}


const exibirShapes = async () => {
  const fetch = await axios.get('./produtos.json')
  const produtos = fetch.data.produtos

  prodSecao.innerHTML = ''

  for (const produto of produtos) {

    const div = document.createElement('div')
    div.classList.add('item')
    div.innerHTML += `<img src="${produto.img}" alt="" class="item-img">
      <p class="item-nome">${produto.nome}</p>
      <p class="item-valor">${produto.valor}</p>`

    div.addEventListener('click', () => {
      window.location.href = `produto.html?prod=${produto.id}`;
      saveScrollPosition()
    })

    prodSecao.appendChild(div)
  }
}


exibirShapes()

function saveScrollPosition() {
  sessionStorage.setItem('scrollPosition', window.scrollY);
  sessionStorage.setItem('fromProductPage', true);
}

function restoreScrollPosition() {
  var fromProductPage = sessionStorage.getItem('fromProductPage');
  if (fromProductPage) {
      var scrollPosition = sessionStorage.getItem('scrollPosition');
      if (scrollPosition !== null) {
          window.scrollTo(0, parseInt(scrollPosition));
      }
      sessionStorage.removeItem('fromProductPage');
  }
}

window.onload = restoreScrollPosition;