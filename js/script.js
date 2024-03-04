const tabContent = document.querySelectorAll(".tab-content");
let index = 0;

tabContent[0].classList.add("ativo");
function next() {
  tabContent[index].classList.remove("ativo");
  index = (index + 1) % tabContent.length;
  tabContent[index].classList.add("ativo");
}

function prev() {
  tabContent[index].classList.remove("ativo");
  index = (index - 1 + tabContent.length) % tabContent.length;
  tabContent[index].classList.add("ativo");
}

setInterval(next, 5000);

/*
const tab = document.querySelectorAll(".btn-banner p");
const tabContent = document.querySelectorAll(".tab-content");

tabContent[0].classList.add("ativo");
function tabNav(section) {
  tabContent.forEach((section) => {
    section.classList.remove("ativo");
  });
  tabContent[section].classList.add("ativo");
}

tab.forEach((i, index) => {
  i.addEventListener("click", () => {
    tabNav(index);
  });
}); 
*/

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

/* const links = document.querySelectorAll(".menu a");

function handleClick(event) {
  event.preventDefault();
  fethPage(event.target.href);
}

async function fethPage(url) {
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  alterarTexto(pageText);
}

function alterarTexto(newtext) {
  const newHtml = document.createElement("div");
  newHtml.innerHTML = newtext;

  const oldContent = document.querySelector(".main h1");
  const newContente = newHtml.querySelector(".propriedades h1");

  oldContent.innerHTML = newContente.innerHTML;
}

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
 */

const numeros = document.querySelector('.numeros')

console.log(numeros)
/* async function mudarNumeros(n){
  const numero = await 
} */



const accordion = document.querySelectorAll('[data-accordion] dt')


function ativarAccordion(){
  this.nextElementSibling.classList.toggle('ativo')
}


accordion.forEach((i) => {
  i.addEventListener('click', ativarAccordion)
})