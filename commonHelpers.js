import{a as L,S as _,A,i as S}from"./assets/vendor-05c5c2f5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const v of s.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&i(v)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const V=document.querySelector(".open-menu-btn"),C=document.querySelectorAll(".header-menu-item"),M=document.querySelector(".header-menu-list");V.addEventListener("click",E);C.forEach(e=>{e.addEventListener("click",E)});function E(){M.classList.toggle("slide")}const P="https://portfolio-js.b.goit.study/api/reviews";async function H(){const{data:e}=await L.get(`${P}`,{headers:{Accept:"application/json"},method:"Get"});return e}document.querySelectorAll(".socials-list .item").forEach(e=>{e.addEventListener("click",function(t){const n=e.querySelector("a");if(n){const i=n.getAttribute("href");i.startsWith("mailto:")?window.location.href=i:window.open(i,"_blank")}})});function h(e,t){return new _(e,t)}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".about-me-accordion-container");new A(e,{duration:400,openOnInit:[0],showMultiple:!0,beforeOpen:function(i){i.querySelector("use[href]").setAttribute("href","/portfolio/assets/icon-sprite-1e5406a1.svg#icon-arrow-up")},beforeClose:function(i){i.querySelector("use[href]").setAttribute("href","/portfolio/assets/icon-sprite-1e5406a1.svg#icon-arrow-down")}});const t=h(".about-me-swiper",{loop:!0,spaceBetween:0,slidesPerView:2,direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});document.querySelector(".about-me-slide-next-btn").addEventListener("click",i=>{t.slideNext()})});const I={navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!1},grabCursor:!0,slidesPerView:1,on:{slideChange:function(){c.isEnd?c.navigation.nextEl.classList.add("swiper-button-disabled"):c.navigation.nextEl.classList.remove("swiper-button-disabled"),c.isBeginning?c.navigation.prevEl.classList.add("swiper-button-disabled"):c.navigation.prevEl.classList.remove("swiper-button-disabled")}}},F=document.querySelector(".swiper"),c=h(F,I);let g=document.getElementsByClassName("faq-btn"),O=document.querySelector(".faq-line");for(let e=0;e<g.length;e++)g[e].addEventListener("click",function(){let t=this.parentElement.parentElement;if(window.innerWidth>=1440){t.classList.contains("active")?(t.classList.remove("active"),t.querySelector(".faq-ac-panel").style.maxHeight=null,this.children[0].classList.remove("rotate")):(t.classList.add("active"),t.querySelector(".faq-ac-panel").style.maxHeight=t.querySelector(".faq-ac-panel").scrollHeight+"px",this.children[0].classList.add("rotate"));let i=document.querySelectorAll(".faq-ac.active"),o=0;i.forEach(s=>{o+=s.querySelector(".faq-ac-panel").scrollHeight}),O.style.height=o+"px"}else t.classList.contains("active")?(t.classList.remove("active"),t.querySelector(".faq-ac-panel").style.maxHeight=null,this.children[0].classList.remove("rotate")):(t.classList.add("active"),t.querySelector(".faq-ac-panel").style.maxHeight=t.querySelector(".faq-ac-panel").scrollHeight+"px",this.children[0].classList.add("rotate"))});let k=document.createElement("style");k.innerHTML=".rotate { transform: rotate(180deg); transition: transform 0.6s ease-in-out; }";document.body.appendChild(k);document.getElementById("animation");function j(e){let t=e.getBoundingClientRect();return t.top>=0&&t.bottom<=window.innerHeight||t.bottom>=0&&t.top<=window.innerHeight}function x(){let e=document.querySelector(".marquee");j(e)?e.querySelectorAll(".marquee__line").forEach(function(n){n.classList.add("animate-covers")}):e.querySelectorAll(".marquee__line").forEach(function(n){n.classList.remove("animate-covers")})}document.addEventListener("DOMContentLoaded",x);window.addEventListener("scroll",x);const N=document.querySelector(".swiper_js"),R=document.querySelector(".swiper_reviews"),W=document.querySelector(".placeholder_text"),D={navigation:{nextEl:".end",prevEl:".start"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},mousewheel:{sensitivity:1}};async function T(){try{const e=await H();R.insertAdjacentHTML("beforeend",$(e));const t=h(N,D);b(t),t.on("slideChange",()=>b(t))}catch{W.classList.replace("visually-hidden","title_not_found"),S.show({message:"Reviews Not found",backgroundColor:"#ed3b44",messageColor:"#fafafa",position:"topRight",timeout:2e3})}}function $(e){return e.map(({author:t,avatar_url:n,review:i})=>`
      <ul class="swiper-slide reviews_cards">
      <li class="card">
      <img class="card_img" src="${n}" alt="photo">
      <h3 class="card_title">${t}</h3>
      <p class="card_text">${i}</p> 
    </li>
    </ul>
    `).join("")}function b(e){const t=document.querySelector(".start"),n=document.querySelector(".end");e.isBeginning?(t.setAttribute("disabled",!0),t.querySelector(".reviews_icon_start").classList.add("disabled")):(t.removeAttribute("disabled"),t.querySelector(".reviews_icon_start").classList.remove("disabled")),e.isEnd?(n.setAttribute("disabled",!0),n.querySelector(".reviews_icon_end").classList.add("disabled")):(n.removeAttribute("disabled"),n.querySelector(".reviews_icon_end").classList.remove("disabled"))}T();const z=document.querySelector(".footer-form-button"),u=document.querySelector(".modal-backdrop"),r=document.querySelector('input[name="email"]'),f=document.querySelector('input[name="comments"]'),l=document.querySelector(".input-wrapper.email"),m=document.querySelector(".input-wrapper.comment"),d=document.querySelector(".input-message.email-message"),p=document.querySelector(".input-message.comment-message"),G=document.querySelector(".modal-close-button");z.addEventListener("click",K);G.addEventListener("click",w);u.addEventListener("click",e=>{e.target===u&&w()});document.addEventListener("keydown",e=>{e.key==="Escape"&&w()});document.querySelectorAll("input").forEach(e=>{e.addEventListener("input",ee)});function K(e){e.preventDefault(),U()&&J({email:r.value,comment:f.value})}function U(){let e=!0;return f.value.trim()===""?(a(m,p,"invalid","Please leave a comment"),e=!1):a(m,p,"success",""),r.checkValidity()?a(l,d,"success",""):(a(l,d,"invalid","Invalid email, try again!"),e=!1),e}function J(e){L.post("https://portfolio-js.b.goit.study/api/requests",e).then(Q).catch(X)}function Q(){u.classList.remove("visually-hidden"),document.body.style.overflow="hidden",Y(),q(l,d),q(m,p)}function X(){Z("Something went wrong, please try again!"),a(l,d,"invalid","Something went wrong, try again!")}function Y(){r.value="",f.value=""}function Z(e){S.error({title:"Error",message:e,maxWidth:300,progressBar:!0,position:"bottomRight",color:"#1c1d20",backgroundColor:"#ed3b44"})}function a(e,t,n,i){e.classList.remove("success","invalid"),n&&e.classList.add(n),t.textContent=i}function q(e,t){e.classList.remove("success","invalid"),t.textContent=""}function ee(){const e=this===r?r:f,t=this===r?l:m,n=this===r?d:p;e.checkValidity()?a(t,n,"success",""):a(t,n,"invalid","Invalid input, try again!")}function w(){u.classList.add("visually-hidden"),document.body.style.overflow=""}const te=document.querySelector(".open-modal-btn"),ne=document.querySelector(".close-modal-btn"),oe=document.querySelectorAll(".modal-item-link"),B=document.querySelector(".modal-window-cont"),ie=document.querySelector(".menu-order-btn");te.addEventListener("click",y);ne.addEventListener("click",y);ie.addEventListener("click",y);oe.forEach(e=>{e.addEventListener("click",y)});function y(){B.classList.toggle("is-open"),document.body.classList.toggle("menu-is-open")}document.addEventListener("keydown",e=>{e.code==="Escape"&&B.classList.remove("is-open")});
//# sourceMappingURL=commonHelpers.js.map