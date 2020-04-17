const todoList = document.getElementById("todoList");
const add = document.getElementById("add");
const dlt = document.getElementsByClassName("delete");
const todo = document.getElementById("todo");
const todoNode = document.getElementById("single__todo");
var x = 0;


add.addEventListener("click", addTodo);
function addTodo(e) {
    e.preventDefault();
    x++;

    // store value
    var todoValue = todo.value;
    
    if(todoValue){
        // clone node 
        todoList.innerHTML += `
            <div class="todo" id="single__todo${x}">
                <input type="text" name="" value="${todoValue}">
                <button onclick="delteTodo(${x})" type="submit" class="delete">Delete</button>
            </div>
        `
        oldId = 0;
        // empty input box 
        emptyInput();

    }else{
        alert("fill the input box");
    }
    
}

function delteTodo(id) {
    todoList.children[`single__todo${id}`].remove();
    x--;
}

function emptyInput() {
    todo.value = ""
}