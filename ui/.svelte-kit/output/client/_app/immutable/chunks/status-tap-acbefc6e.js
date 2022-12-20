import{m as i,c as a,w as c}from"./index4-28b9ad06.js";import{f as d,s as m}from"./_layout-c5df7938.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const p=()=>{const e=window;e.addEventListener("statusTap",()=>{i(()=>{const n=e.innerWidth,s=e.innerHeight,o=document.elementFromPoint(n/2,s/2);if(!o)return;const t=d(o);t&&new Promise(r=>a(t,r)).then(()=>{c(async()=>{t.style.setProperty("--overflow","hidden"),await m(t,300),t.style.removeProperty("--overflow")})})})})};export{p as startStatusTap};
