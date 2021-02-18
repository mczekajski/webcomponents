import {html, render} from '../node_modules/lit-html/lit-html.js';
import Counter from "./webcomponents/counter.js";
import Menu from "./webcomponents/menu.js";

window.customElements.define('app-menu', Menu);

let sayHello = (name) => html`<h1>Cześć ${name}</h1>`;
render(sayHello('Marcin'), document.getElementById('lit-div'));

window.customElements.define('app-counter', Counter);

