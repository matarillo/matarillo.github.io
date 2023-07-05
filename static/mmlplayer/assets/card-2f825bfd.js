import{p as s}from"./player-45b99b73.js";const n=""+new URL("play-7ef6c435.svg",import.meta.url).href,r=""+new URL("stop-fc3f8bf7.svg",import.meta.url).href;document.querySelector("#app").innerHTML=`
  <svg id="player" width="200" height="200" tabindex="-1" viewBox="0 0 200 200">
    <image id="start" x="50" y="50" width="100" height="100" href="${n}" style="visibility:visible;" />
    <image id="stop" x="50" y="50" width="100" height="100" href="${r}" style="visibility:hidden;" />
  </svg>
`;const o=document.getElementById("start"),l=document.getElementById("stop"),c=m();function i(t){o.style.visibility=t?"hidden":"visible",l.style.visibility=t?"visible":"hidden"}function m(){var e;const t=(e=document.head.querySelector('meta[name="player:param"]'))==null?void 0:e.content,a=location.search.length>0?new URLSearchParams(document.location.search.substring(1)).get("param"):null;return t??a??""}document.querySelector("#start").addEventListener("click",async()=>{i(!0);const t=atob(c);await s(t),i(!1)});
