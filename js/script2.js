class GerarCasa {
  async gerarElemento(link, tipo) {
    try {
      const response = await fetch(link);
      const casaResponse = await response.json();
      const divPropriedades = document.querySelector(`.propriedades-${tipo}`);

      casaResponse[tipo].forEach((casa) => {
        const articleCasa = this.criarElementoVila(casa);
        divPropriedades.appendChild(articleCasa);
      });
    } catch (error) {
      console.log(error);
    }
  }

  criarElementoVila(casa) {
    const div = document.createElement('article');
    div.classList.add('propriedades-item');
    div.innerHTML = `
    <article class="propriedades-item">
    <img ${casa.img} alt="">
    <div class="tipo-preco">
    <span class="tipo">${casa.tipo}</span>
    <span>${casa.preco}</span>
    </div>
    <h1 class="endereco">${casa.endereco}</h1>
    <ul class="propriedades-item-info">
    <li>Quartos:<span>${casa.quartos}</span></li>
    <li>Área:<span>${casa.area}</span></li>
    <li>Estacionamento:</li>
    <li>Banheiros:</li>
    </ul>
    <button>escolher</button>
    </article>
    `;
    return div;
  }
}

const gerarVila = new GerarCasa();
gerarVila.gerarElemento('./js/casa.json', 'vila');

const gerarLuxo = new GerarCasa();
gerarLuxo.gerarElemento('./js/casa.json', 'luxo');

const btnVila = document.querySelectorAll('.propriedades-lista li');
const typeCasa = document.querySelectorAll('.propriedades-container section');

const classeAtiva = 'ativo';

btnVila[0].classList.add(classeAtiva);
typeCasa[0].classList.add(classeAtiva);
function mudarCasa(section) {
  btnVila.forEach((item) => {
    item.classList.remove(classeAtiva);
  });
  btnVila[section].classList.add(classeAtiva);

  typeCasa.forEach((item) => {
    item.classList.remove(classeAtiva);
  });
  typeCasa[section].classList.add(classeAtiva);
}

btnVila.forEach((item, index) => [
  item.addEventListener('click', () => {
    mudarCasa(index);
  }),
]);
