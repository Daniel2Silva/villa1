export default function initTabNav() {
    const tabBtn = document.querySelectorAll('[data-tab="btn"] li');
    const tabContent = document.querySelectorAll(".melhor-negocio-item");
  
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
  }