(()=>{"use strict";new class{constructor(){this.tabBtn=document.querySelectorAll('[data-tab="btn"] li'),this.tabContent=document.querySelectorAll(".melhor-negocio-item"),this.init()}init(){this.tabBtn[0].classList.add("ativo"),this.tabContent[0].classList.add("ativo"),this.tabBtn.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.ativarTab(e)}))}))}ativarTab(t){this.tabBtn.forEach((t=>{t.classList.remove("ativo")})),this.tabContent.forEach((t=>{t.classList.remove("ativo")})),this.tabBtn[t].classList.add("ativo"),this.tabContent[t].classList.add("ativo")}}("./modules/tabnav.js"),function(){const t=document.querySelectorAll(".tab-content");let e=0;t[0].classList.add("ativo"),setInterval((function(){t[e].classList.remove("ativo"),e=(e+1)%t.length,t[e].classList.add("ativo")}),5e3)}(),function(t){const e=document.querySelectorAll(".accordion-feature dt");return e[0].classList.add("ativo"),e[0].nextElementSibling.classList.add("ativo"),{ativarAcord:function(){e.forEach((t=>{t.addEventListener("click",(()=>{t.classList.toggle("ativo"),t.nextElementSibling.classList.toggle("ativo")}))}))}}}().ativarAcord(),function(){const t=document.querySelector(".btn-mobile"),e=document.querySelector(".menu");t.addEventListener("click",(function(t){e.classList.add("ativo"),function(t,i){const a=document.documentElement,s="data-outside";function n(i){t.contains(i.target)||(t.removeAttribute(s),a.removeEventListener("click",n),e.classList.remove("ativo"))}t.hasAttribute(s)||(setTimeout((()=>{a.addEventListener("click",n)})),t.setAttribute(s,""))}(e)}))}()})();