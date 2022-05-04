const d=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};d();const o=document.createElement("style");o.textContent="*,::after,::before{box-sizing:border-box}blockquote,body,dd,dl,figure,h1,h2,h3,h4,p{margin:0;padding:0}ol,ul{list-style:none}html:focus-within{scroll-behavior:smooth}body{width:100%;min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}button,input,select,textarea{font:inherit}@media (prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,::after,::before{animation-duration:0s!important;animation-iteration-count:1!important;transition-duration:0s!important;scroll-behavior:auto!important}}button{cursor:pointer}";o.setAttribute("id","css-reset");class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.style.width="100%"}connectedCallback(){const i=this.shadowRoot;i.innerHTML=`
    <link rel="stylesheet" href="./components/x-rating-card.css">
        <div id="container">
            <div id='img-container'>
                <img src="../static/star.svg" alt="Star">
            </div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <form action="">
                <div id="ratings">
                    <label for="one-star">1</label>
                    <input type="radio" id="one-start" name="rating">
                    <label for="two-star">2</label>
                    <input type="radio" id="two-start" name="rating">
                    <label for="three-star">3</label>
                    <input type="radio" id="three-start" name="rating">
                    <label for="four-star">4</label>
                    <input type="radio" id="four-start" name="rating">
                    <label for="five-star">5</label>
                    <input type="radio" id="five-start" name="rating">
                </div>
                <input type="submit" value="submit">
            </form>
        </div>
    `,i.prepend(o)}}class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const i=this.shadowRoot;i.innerHTML=`
        <style id='css-main'>
        </style>
        <div id="container">
        </div>
    `,i.prepend(o)}}customElements.define("x-rating-card",l);customElements.define("x-thank-you-card",c);
