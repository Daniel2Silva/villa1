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


/* async function mudarNumeros(n){
  const numero = await 
} */

/* 
 class button {
   constructor(options) {
     this.options = options
 
   }
   element() {
     const buttonCriado = document.createElement("button");
     buttonCriado.innerText = this.options.text;
     buttonCriado.style.background = this.options.background;
     buttonCriado.style.padding = this.options.padding;
     return buttonCriado;
   }
   appednTo(target) {
     const div = document.querySelectorAll(target);
     div.forEach((item) => {
       item.appendChild(this.element());
     });
     return div;
   }
 }
 

const buttonBlue = {
  background: 'blue',
  text: 'clique',
  padding: '10px',
}

const buttonElement = new button(buttonBlue).appednTo('.melhor-negocio-item')
 */
