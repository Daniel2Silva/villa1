/* export default function initTabNav() {
    const tabBtn = document.querySelectorAll('[data-tab="btn"] li');
    const tabContent = document.querySelectorAll(".melhor-negocio-item");


    tabBtn[0].classList.add('ativo')
    tabContent[0].classList.add("ativo");
    function ativarTab(section) {
      tabBtn.forEach((btn) => {
        btn.classList.remove('ativo')
      })
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[section].classList.add("ativo");
      tabBtn[section].classList.add('ativo')
    }
  
    tabBtn.forEach((item, index) => {
      item.addEventListener("click", () => {
        ativarTab(index);
      });
    });
  } */

export default class tabNav {
  constructor() {
    this.tabBtn = document.querySelectorAll('[data-tab="btn"] li');
    this.tabContent = document.querySelectorAll(".melhor-negocio-item");

    this.init()
  }

  init(){
    this.tabBtn[0].classList.add('ativo')
    this.tabContent[0].classList.add('ativo')
    this.tabBtn.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.ativarTab(index)
      })
    })
  }



  ativarTab(section){
    this.tabBtn.forEach((btn) => {
      btn.classList.remove('ativo')
    })
    this.tabContent.forEach((content) => {
      content.classList.remove('ativo')
    })
    this.tabBtn[section].classList.add('ativo')
    this.tabContent[section].classList.add('ativo')
  }

}
