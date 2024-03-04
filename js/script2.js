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


const accordion = document.querySelector('[data-accordion] dt')

console.log(accordion)