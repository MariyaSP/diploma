(()=>{"use strict";const e=(e,t,s,l)=>{const c=document.getElementById(e),o=c.querySelectorAll(t),n=l;let r=document.documentElement.clientWidth,d=0;const a=e=>{l=e<576?0:n,i(d)};if(window.addEventListener("resize",(()=>{r=document.documentElement.clientWidth,a(r)})),!c||!o)return;const i=e=>{o.forEach(((t,s)=>{s>e+l||s<e?t.classList.add("item__display"):(t.classList.remove("item__display"),l||(t.style.maxWidth=r+"px"))}))};c.addEventListener("click",(e=>{e.preventDefault(),e.target.closest(s)&&(e.target.closest(s+"--right")?d+=l+1:e.target.closest(s+"--left")&&(d-=l+1),d>=o.length&&(d=l?0:l+1),d<0&&(d=l?o.length-(l+1):o.length-1),i(d))})),a(r)};(()=>{const e=document.querySelector(".header-modal"),t=document.querySelector(".button"),s=document.querySelector(".overlay"),l=(e,t)=>{e.classList.toggle(t)};t.addEventListener("click",(t=>{t.preventDefault(),l(e,"header-modal"),s.style.display="block"})),e.addEventListener("click",(t=>{t.target.classList.contains("header-modal__close")&&(l(e,"header-modal"),s.style.display="none")}))})(),e("benefits",".benefits__item",".benefits__arrow",2),e("services",".col-md-12",".services__arrow",1),(()=>{const e=document.querySelectorAll(".service-button"),t=document.querySelector(".services-modal"),s=document.querySelector(".overlay"),l=(e,t)=>{e.classList.toggle(t)};e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),l(t,"services-modal"),s.style.display="block"}))})),t.addEventListener("click",(e=>{e.target.classList.contains("services-modal__close")&&(l(t,"services-modal"),s.style.display="none")}))})()})();