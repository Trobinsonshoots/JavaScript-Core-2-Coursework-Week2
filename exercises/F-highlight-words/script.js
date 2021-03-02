function highlightWords(paragraph, colours) {
  // Write your code here...

  let divSect = document.getElementById('content');
  let pElem = document.createElement('p');
  let selectElem = document.createElement('select');
  selectElem.setAttribute('id', 'selectEle')
  // let optionBlank = document.createElement('option')
  // selectElem.append(optionBlank);
  divSect.append(selectElem);
  divSect.append(pElem);



  for (let i=0; i<colours.length; i++){
    let option = document.createElement('option')
    option.innerText = colours[i];
    selectElem.append(option);
  }

  let paraArr = paragraph.split(" ");
  
  for (let j=0; j<paraArr.length; j++) {
    let spanElem = document.createElement('span');
    spanElem.innerText = paraArr[j] + " ";

    spanElem.addEventListener('click', function(){
      let toHighlight = document.getElementById('selectEle').value;
      console.log(toHighlight);
      console.log(spanElem);
      if (toHighlight === 'none'){
        spanElem.style.backgroundColor = "";
      } else if (toHighlight == "yellow"){
        spanElem.style.backgroundColor = "yellow";
        console.log(`i should be yellow`);
      } else if (toHighlight === "green") {
        spanElem.style.backgroundColor = "green";
      } else if  (toHighlight === "blue") {
        spanElem.style.backgroundColor = "blue";
      }
    })


    pElem.append(spanElem);
  }
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
