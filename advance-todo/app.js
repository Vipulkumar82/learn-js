const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const editIndexInput = document.getElementById('edit-index');
const submitBtn = document.getElementById('submit-btn');

let todos = [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const data = localStorage.getItem('todos');
    if (data) {
        todos = JSON.parse(data);
    }
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, idx) => {
        const li = document.createElement('li');
        li.className = 'todo-item' + (todo.completed ? ' completed' : '');
        li.innerHTML = `
            <span class="todo-text">${todo.text}</span>
            <div class="todo-actions">
                <button onclick="toggleComplete(${idx})" title="Complete">&#10003;</button>
                <button onclick="editTodo(${idx})" title="Edit">&#9998;</button>
                <button onclick="deleteTodo(${idx})" title="Delete">&#10005;</button>
            </div>
        `;
        todoList.appendChild(li);
    });
    saveTodos();
}

window.toggleComplete = function(idx) {
    todos[idx].completed = !todos[idx].completed;
    renderTodos();
};

window.deleteTodo = function(idx) {
    todos.splice(idx, 1);
    // Reset edit state if deleting the edited todo
    if (editIndexInput.value !== "" && Number(editIndexInput.value) === idx) {
        resetEditState();
    }
    renderTodos();
};

window.editTodo = function(idx) {
    todoInput.value = todos[idx].text;
    editIndexInput.value = idx;
    submitBtn.textContent = "Update";
    todoInput.focus();
};

function resetEditState() {
    editIndexInput.value = "";
    submitBtn.textContent = "Add";
    todoInput.value = "";
}

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = todoInput.value.trim();
    const editIdx = editIndexInput.value;
    if (text) {
        if (editIdx !== "") {
            todos[editIdx].text = text;
            resetEditState();
        } else {
            todos.push({ text, completed: false });
        }
        renderTodos();
        todoInput.value = "";
    }
});

todoInput.addEventListener('input', function() {
    if (todoInput.value.trim() === "" && editIndexInput.value !== "") {
        resetEditState();
    }
});

loadTodos();
renderTodos();
