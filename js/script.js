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
