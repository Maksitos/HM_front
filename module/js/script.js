let todoForm = document.getElementById('form');
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    let someTodo = {
        title: todoForm.children.item(1).value,
        body: todoForm.children.item(3).value,
        completed: todoForm.children.item(5).checked
    }
    const promise = fetch('http://localhost:8080/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },        
        body: JSON.stringify(someTodo)
    })
    promise
    .then ((res) => {
        return res.json()
    })
    .then ((data) => {
        console.log(data)
    })
})