class Counter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<h1> Hello World </h1> `
    }
}

window.customElements.define('my-counter', Counter);