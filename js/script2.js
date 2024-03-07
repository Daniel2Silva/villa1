/* 



async function alterarNumeros(url) {
  const btcResponse = await fetch(url);
  const btcCorpo = await btcResponse.json();
  const numeros = document.querySelector(".numeros");
    const divPessoa = createElement(btcCorpo);
    numeros.appendChild(divPessoa)
}

function createElement(pessoa){
    const div = document.createElement('div')
    div.classList.add('.numeros')
    div.innerHTML = `<h3>${pessoa.BRL.buy}</h3><span>${pessoa.idade}</span>`
    return div
}

/* alterarNumeros('./js/txt.json') */

async function gerarCasas(link) {
  const response = await fetch(link);
  const casaResponse = await response.json();
  const divPropriedades = document.querySelector('.propriedades-itens')
  casaResponse.forEach((casa) => {
    const articleCasa = criarElemento(casa)
    divPropriedades.appendChild(articleCasa)
  })
}

function criarElemento(casa) {
  const div = document.createElement("article");
  div.classList.add(".propriedades-item");
  div.innerHTML = `
  <article class="propriedades-item">
            <img src="/src/img/banner-02.jpg" alt="">
            <div class="tipo-preco">
              <span>${casa.tipo}</span>
              <span>${casa.preco}</span>
            </div>
            <h1 class="endereco">${casa.endereco}</h1>
            <ul class="propriedades-item-info">
              <li>quato</li>
              <li>area</li>
              <li>parking</li>
              <li>banheiro</li>
              <li>Florida</li>
            </ul>
            <button>escolher</button>
          </article>
  `
  return div
}

gerarCasas("./js/casa.json");
