function todoList(todos) {
  // Write your code here...
  let unorderedList = document.createElement('ul');
  let divSect = document.getElementById('content');
  divSect.append(unorderedList);
  for (let i=0; i<todos.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = todos[i].todo;
    listItem.addEventListener('click', function(){
      if (listItem.classList.length === 0) {
        listItem.className = "strike";
      } else if (listItem.className === "strike") {
        listItem.classList.remove("strike")
      }
    })
    unorderedList.append(listItem);
  }
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);