export default function initAccordion() {
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