
// theme changer btns
let blue = document.getElementById('blueBtn');
let orange = document.getElementById('orangeBtn');
let green= document.getElementById('greenBtn');

// jumbotron and jumbotron btns
let jumbotron = document.getElementsByClassName('jumbotron');
let donateBike = document.getElementsByClassName('btn-primary');
let volunteer = document.getElementsByClassName('btn-secondary');

// Blue theme
blue.addEventListener('click', function (){
    jumbotron[0].style.backgroundColor = "#588fbd";
    donateBike[0].style.backgroundColour = `#ffa500`;
    volunteer[0].style.backgroundColor = `black`;
    volunteer[0].style.color = `white`;
})

// Orange theme
orange.addEventListener('click', function(){
    jumbotron[0].style.backgroundColor = `#f0ad4e`;
    donateBike[0].style.backgroundColour = `#5751fd`;
    volunteer[0].style.backgroundColor = `#31b0d5`;
    volunteer[0].style.color = `white`;
})

// Green theme
green.addEventListener('click', function(){
    jumbotron[0].style.backgroundColor = `#87ca8a`;
    donateBike[0].style.backgroundColour = `black`;
    volunteer[0].style.backgroundColor = `#8c9c08`;
})

// Register form
let form = document.getElementsByTagName('form')[0];
let emailInput = document.getElementById('exampleInputEmail1')
let nameInput = document.getElementById('example-text-input');
let textArea = document.getElementById('exampleTextarea');
let submitBtn = document.getElementsByTagName('form')[0][3];
submitBtn.setAttribute('id', 'submitBtn');

// function checkForm(){};

submitBtn.addEventListener('click', function (e){
    e.preventDefault();
    let regEx = /@/;
    console.log()
    for (let i=0; i<form.length-1; i++){
        if (form[i].value === ""){
            form[i].style.backgroundColor = "red";
        } else if (form[i] === emailInput && regEx.test(form[i].value) === false){
            form[i].style.backgroundColor = "red";
        } 
    }
    if (form[0].value.length > 0 && form[1].value.length > 0 && form[2].value.length > 0 ) {
        alert('Thank you for filling out the form');
    }

    form.reset();
});

