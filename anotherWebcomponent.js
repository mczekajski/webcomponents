const template2 = document.createElement("template");
template2.innerHTML = `
    <h2>h2 header!</h2>
`

class AnotherWebcomponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template2.content.cloneNode(true));
    }
}

window.customElements.define("another-webcomponent", AnotherWebcomponent);