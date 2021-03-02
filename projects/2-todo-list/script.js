function populateTodoList(todoList) {
  let list = document.getElementById("todo-list");

  for (let i=0; i<todoList.length; i++){
  
    let liItem = document.createElement('li');
    liItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
   
    let span = document.createElement('span')
    span.classList.add("badge", "bg-primary", "rounded-pill");

    let iCheck = document.createElement('i');
    iCheck.classList.add("fa", "fa-check")
    iCheck.setAttribute("aria-hidden", "true");

    let iTrash = document.createElement('i')
    iTrash.classList.add("fa", "fa-trash")
    iTrash.setAttribute("aria-hidden", "true");

    liItem.innerText = todoList[i].task;
    span.append(iCheck);
    span.append(iTrash);
    liItem.append(span);
    list.append(liItem);

    iCheck.addEventListener('click', () => {
        if (liItem.style.textDecoration === "") {
          liItem.style.textDecoration = "line-through";
        } else if (liItem.style.textDecoration === "line-through") {
          liItem.style.textDecoration = "";
        }
      });
    
    iTrash.addEventListener('click', function(e){
      let getLiParent = e.target.parentElement.parentElement;
      getLiParent.remove()
    })
    
    }
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Cook dinner", completed: false },
  { task: "Hoover", completed: false },
  { task: "Do laundry", completed: false },
  { task: "Clean oven", completed: false },
];

populateTodoList(todos);

function addNewTodo(event) {

  event.preventDefault();
  
  let newTodo = [];
  let newTodoObj = new Object();

  let input = document.getElementById('todoInput').value;
  let form = document.getElementsByTagName('form')[0];

  newTodoObj.task = input;
  newTodo.push(newTodoObj);
  form.reset();

  populateTodoList(newTodo);
}


function deleteAllCompletedTodos() {
  
  let list = document.getElementById("todo-list");
  let listDiv = list.parentElement;
  let listItemHTMLC = document.getElementsByClassName('list-group-item');
  let listItem = [...listItemHTMLC];

  
  let deleteDiv = document.createElement('div');
  deleteDiv.classList.add("col-md", "offset-1");
  let deleteCompletedBtn = document.createElement('button')
  deleteCompletedBtn.innerText = "Delete Completed";
  deleteCompletedBtn.classList.add("btn", "btn-primary", "mb-3");

  deleteDiv.append(deleteCompletedBtn);
  listDiv.append(deleteDiv);

  deleteCompletedBtn.addEventListener('click', () => {
    
    for(let i=0; i<listItem.length; i++){
      if (listItem[i].style.textDecoration === "line-through") {
        listItem[i].remove();
      } 
    }
  });

};

deleteAllCompletedTodos();
