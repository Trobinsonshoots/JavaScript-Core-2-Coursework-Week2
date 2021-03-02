function listOfColours(colours) {
  // Write your code here...
  let divSect = document.getElementById('content');
  let pElem = document.createElement('p');

  let select = document.createElement('select');
  select.name = "colours";

  divSect.append(select);
  divSect.append(pElem);
  let optionBlank = document.createElement('option');
  select.append(optionBlank);

  for (let i=1; i<colours.length+1; i++) {
    let option = document.createElement('option');
    option.value = colours[i-1];
    option.text = colours[i-1];
    select.append(option);
}

select.addEventListener('change', function(){
  pElem.innerText = `You have selected: ` + select.value;
  pElem.style.color = select.value;
});
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
