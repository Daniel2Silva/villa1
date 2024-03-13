export default class acorddion {
  constructor(elementoSelecionado) {
    this.elemento = document.querySelectorAll(elementoSelecionado);
  }

  initAccordion(item) {
    item.classList.toggle('ativo');
    item.nextElementSibling.classList.toggle('ativo');
  }

  ativarAcord() {
    this.elemento.forEach((item) => {
      item.addEventListener('click', () => {
        this.initAccordion(item);
      });
    });
  }

  init() {
    this.ativarAcord();
    this.initAccordion(this.elemento[0]);
  }
}
