/* export default function initAccordion() {
  const accordion = document.querySelectorAll("[data-accordion] dt");

  accordion[0].classList.add('ativo')
  accordion[0].nextElementSibling.classList.add('ativo')
  function ativarAccordion() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  accordion.forEach((i) => {
    i.addEventListener("click", ativarAccordion);
  });
}
 */

export default function initAccordion() {
  function $$(elementoSelecionado) {
    const elemento = document.querySelectorAll(elementoSelecionado);

    elemento[0].classList.add('ativo')
    elemento[0].nextElementSibling.classList.add('ativo')
    function ativarAcord() {
      elemento.forEach((item) => {
        item.addEventListener('click', () => {
          item.classList.toggle('ativo')
          item.nextElementSibling.classList.toggle('ativo')
        })
      })
    }
    return{
      ativarAcord,
    }
  }
  
  const accordion = $$('.accordion-feature dt')
  
  accordion.ativarAcord()
}