function shoppingList(arrayOfPeople) {
  // Write your code here...

  let content = document.getElementById('content');
  let unorderedList = document.createElement('ul');
  content.append(unorderedList);

  for (let i=0; i<shopping.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = shopping[i];
    unorderedList.append(listItem);
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
