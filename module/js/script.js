let todoForm = document.getElementById('form');
todoForm.onsubmit = () => {
    return false;
  };
let submit = document.getElementById('submit');
function createTodo(data) {
    let content = document.getElementById('content')
    let newTodo = document.createElement('div')
    let todoBody = document.createElement('div')
    let todoTitle = document.createElement('h2')
    let isCompleted = document.createElement('div')
    let checkLabel = document.createElement('label')
    let checkbox = document.createElement('INPUT')
    let deleteButton = document.createElement('button')
    deleteButton.className = 'delete'
    deleteButton.innerText = 'X'
    deleteButton.addEventListener('click', function() {
        deleteTodo(data.id)
        newTodo.remove()
    })
    checkbox.type = 'checkbox'
    checkbox.checked = data.completed
    checkbox.addEventListener('click', function() {
        pathTodo(data, checkbox)
    })
    checkLabel.innerText = 'Is completed'
    checkLabel.append(checkbox)
    isCompleted.className = 'completed'
    isCompleted.append(checkLabel)
    todoBody.className = 'body'
    todoBody.innerText = data.body
    todoTitle.className = 'title'
    todoTitle.innerText = data.title
    newTodo.className = 'todo'
    newTodo.dataset.id = data.id
    content.append(newTodo)
    newTodo.append(todoTitle)
    newTodo.append(todoBody)
    newTodo.append(isCompleted)
    newTodo.append(deleteButton)
}

function deleteTodo(id) {
    let prommise = fetch(`http://localhost:8080/todo/${id}`, {
        method: 'DELETE',
    })
    prommise
}

function postData(url, data) {
    const promise = fetch(url, data)
    promise
    .then((res) => res.json())
    .then(function(data) {
        createTodo(data)
    })
    .catch(err => {
        console.log(err)
    })
}

function pathTodo(data,check) {
    let prommise = fetch(`http://localhost:8080/todo/${data.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            id: data.id,
            title: data.title,
            body: data.body,
            completed: check.checked
        })
    })
    prommise
}

todoForm.addEventListener('submit', function () {
    let someTodo = {
        title: todoForm.children.item(1).value,
        body: todoForm.children.item(3).value,
        completed: todoForm.children.item(5).checked
    }
    postData('http://localhost:8080/todo',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },        
        body: JSON.stringify(someTodo)
    })
}  
)