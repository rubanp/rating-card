import minireset from "./minireset";
class CustomElem extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
        <style id='css-main'>
        </style>
        <div id="container">
        </div>
    `;
    shadow.prepend(minireset);
  }
}
export default CustomElem;
