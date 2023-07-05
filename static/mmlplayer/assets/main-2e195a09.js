import{p as r}from"./player-45b99b73.js";document.querySelector("#app").innerHTML=`
  <div>
    <h1>Small MML Player</h1>
    <div class="card">
      <textarea id="mml" rows="8" cols="60"></textarea>
    </div>
    <div class="card">
      <button id="run" type="button">Play</button>
    </div>
    <div class="card">
      <textarea id="b64" rows="8" cols="60"></textarea>
    </div>
  </div>
`;document.querySelector("#run").addEventListener("click",async a=>{const e=document.querySelector("#mml").value;document.querySelector("#b64").value=btoa(e);const t=a.currentTarget;t.disabled=!0,await r(e),t.disabled=!1});
