import{t as e}from"./player-CY-tmMnB.js";import"./modulepreload-polyfill-Dezn_h7o.js";var t=`T120 O4 L4 V12

MELODY:
@1 C D E F G A B >C

BASS:
@3 O2 L8 CCR_G CCR_G FFRC FFRC

PAD:
@6 O3 L1 (CEG) (CFA)
`;document.querySelector(`#app`).innerHTML=`
  <div>
    <h1 class="app-title">Small MML Player</h1>
    <p class="project-links">
      <a href="https://github.com/matarillo/mmlplayer/" target="_blank" rel="noopener noreferrer">matarillo/mmlplayer on GitHub</a>
    </p>
    <div class="card">
      <div class="mml-editor">
        <div class="mml-editor-header">
          <label for="mml">MML</label>
          <a class="readme-link" href="readme.html">MMLの書き方</a>
        </div>
        <textarea id="mml" rows="12" cols="60">${t}</textarea>
      </div>
    </div>
    <div class="card">
      <button id="run" type="button">Play</button>
    </div>
    <div class="card">
      <textarea id="b64" rows="8" cols="60"></textarea>
    </div>
  </div>
`,document.querySelector(`#run`).addEventListener(`click`,async t=>{let n=document.querySelector(`#mml`).value,r=encodeURIComponent(btoa(n));document.querySelector(`#b64`).value=`card.html?param=${r}`;let i=t.currentTarget;i.disabled=!0;try{await e(n)}catch(e){console.error(e),alert(e instanceof Error?e.message:String(e))}finally{i.disabled=!1}});