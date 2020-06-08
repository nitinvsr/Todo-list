//selectors
const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');

//event listener
todobutton.addEventListener('click', addtodo)
todolist.addEventListener('click', checked)



//functions
function addtodo(event) {
    //prevents form submisson
    event.preventDefault();
    //each div of todo
    const tododiv = document.createElement('div');
    tododiv.classList.add('todo');
    //li element inside div
    const newtodo = document.createElement('li');
    newtodo.innerText = todoinput.value;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);
    //check mark button
    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = '<i class="fas fa-check"></i>';
    completedbutton.classList.add("complete-button");
    tododiv.appendChild(completedbutton);
    //trash mark button
    const trashbutton = document.createElement('button');
    trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
    trashbutton.classList.add("trash-button");
    tododiv.appendChild(trashbutton);
    //append to todolist
    todolist.appendChild(tododiv);
    //clear input textbox after appending
    todoinput.value = null;

}

function checked(event) {
    const item = event.target;
    //check it
    if (item.classList[0] === 'complete-button') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');

    }
    if (item.classList[0] === 'trash-button') {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });

    }
}