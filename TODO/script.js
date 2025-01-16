const todoInput = document.getElementById('todo-input')
const todoAddBtn = document.getElementById('todo-add-btn')
const allTodo = document.getElementById('all-todo')

let allTodos = [];
let todoId = 0;

const addTodoFunction = (e) => {
    e.preventDefault()
    allTodos.push({title:todoInput.value,id:++todoId})
    allTodo.innerHTML=''
    showTodo()
    todoInput.value=""
}

const showTodo = () => {
    allTodos.map((todo)=>{
        const myDiv = document.createElement('div');
        myDiv.innerHTML=`<p>${todo.title}</p> <button onclick="handleDelete(${todo.id})">delete</button>`;
        allTodo.appendChild(myDiv);
    })
}

const handleDelete = (tid) => {
    const updatedTodo = allTodos.filter((td)=>td.id!==tid);
    allTodos=updatedTodo;
    allTodo.innerHTML=""
    showTodo()
}

todoAddBtn.addEventListener('click',addTodoFunction)
