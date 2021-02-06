import {html, render} from '../node_modules/lit-html/lit-html.js';
import Counter from "./webcomponents/counter.js";

let sayHello = (name) => html`<h1>Cześć ${name}</h1>`;
render(sayHello('Marcin'), document.getElementById('lit-div'));

window.customElements.define('my-counter', Counter);

