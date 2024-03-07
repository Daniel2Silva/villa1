export default function initSlide() {
  const tabSlide = document.querySelectorAll(".tab-content");
  let index = 0;

  tabSlide[0].classList.add("ativo");
  function next() {
    tabSlide[index].classList.remove("ativo");
    index = (index + 1) % tabSlide.length;
    tabSlide[index].classList.add("ativo");
  }

  function prev() {
    tabSlide[index].classList.remove("ativo");
    index = (index - 1 + tabSlide.length) % tabSlide.length;
    tabSlide[index].classList.add("ativo");
  }

  setInterval(next, 5000);
}
