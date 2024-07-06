export default class Counter extends HTMLElement {
  css = `
		:host {
            max-width: 250px;
		}

        h1 {
            font-size: 3rem;
        }

		.value {
			padding: 24px 0;
			font-size: 2rem;
		}

		.buttons {
			display: flex;
			gap: 16px;
		}

		.button {
            width: 30px;
            height: 30px;
			background: #dddddd;
			color: #333333;
			cursor: pointer;
			border-radius: 5px;
		}

        .button span {
            display:flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
        }

		.button:active {
			background: #cccccc;
		}
	`;

  template = () => {
    return `
            <h1>HEADER</h1>
            <h2>${this.title}</h2>
			<div class="value">Đã đếm: ${this.value} lần</div>
			<div class="buttons">
                <button type="button" class="button button--decrement"><span>-</span></button>
				<button type="button" class="button button--increment"><span>+</span></button>
			</div>
		`;
  };

  constructor() {
    super();
    this.title = `Counter App`;
    this.value = 0;

    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
			<style>${this.css.trim()}</style>
			${this.template().trim()}
		`;

    this.shadowRoot
      .querySelector(".button--increment")
      .addEventListener("click", this.onIncrementButtonClick);
    this.shadowRoot
      .querySelector(".button--decrement")
      .addEventListener("click", this.onDecrementButtonClick);
  }

  onIncrementButtonClick = () => {
    this.value++;
    this.render();
  };

  onDecrementButtonClick = () => {
    this.value = Math.max(0, this.value - 1);
    this.render();
  };
}
