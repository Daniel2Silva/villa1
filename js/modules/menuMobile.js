export default function initMenuMobile() {
  const btn = document.querySelector(".btn-mobile");
  const menu = document.querySelector(".menu");

  function menuAtivo(event) {
    menu.classList.add("ativo");
    clickFora(menu, () => {
      menu.classList.remove("ativo");
    });
  }

  function clickFora(element, callback) {
    const html = document.documentElement;
    const outside = "data-outside";

    if (!element.hasAttribute(outside)) {
      setTimeout(() => {
        html.addEventListener("click", quandoClickarFora);
      });

      element.setAttribute(outside, "");
    }
    function quandoClickarFora(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        html.removeEventListener("click", quandoClickarFora);
        callback();
      }
    }
  }

  btn.addEventListener("click", menuAtivo);
}
