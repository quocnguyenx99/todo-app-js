import html  from "../core.js";

function Header() {
    return html`
        <header id="header">
            <div class="flex">
                <h1 class="header__title">todo</h1>
                <img class="header__img" id="theme-button" src="./assets/icon-moon.svg" alt="icon-moon">
            </div>
            <input 
                class="new-todo" 
                placeholder="Create a new todo..."
                onkeyup="event.keyCode === 13 && dispatch('add', this.value.trim())"
            > 
        </header>
    `
}

export default Header