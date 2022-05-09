import html  from "../core.js";


function NewTodo() {
    console.log('test');
    return html`
        <div class="todo-wrapper">
        <input 
            class="new-todo" 
            placeholder="Create a new todo..."
            onkeyup="event.keyCode === 13 && dispatch('add', this.value.trim())"
        > 
        </div>
    `
}

export default NewTodo