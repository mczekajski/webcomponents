const template = document.createElement("template");
template.innerHTML = `
    <style>
        .tooltip-container {
            display: inline-block;
            position: relative;
            z-index: 2;
        }

        .cancel {
            display: none;
        }

        svg {
            width: 1em;
            cursor: pointer;
        }

        .notify-container {
            position: absolute;
            bottom: 125%;
            z-index: 9;
            width: 300px;
            background: white;
            box-shadow: 5px 5px 10px rgba(0,0,0,.1);
            font-size: .8em;
            border-radius: .5em;
            padding: 1em;
            transform: scale(0);
            transform-origin: bottom left;
            transition: transform .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
        }
    </style>

    <div class="tooltip-container">
    <svg class="alert" viewBox="0 0 20 20">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
  </svg>
  <svg class="cancel" viewBox="0 0 20 20">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>

        <div class="notify-container">
            My tooltip text
        </div>

    </div>
`;

class PopupNotify extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  tooltip(expandState) {
      const tooltip = this.shadowRoot.querySelector('.notify-container');
  }

  connectedCallback() {
      this.shadowRoot.querySelector('.alert').addEventListener('click', () => {
          this.tooltip(true)
      })
  }
}

window.customElements.define("popup-notify", PopupNotify);
