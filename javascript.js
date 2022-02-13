const boxHolder = document.querySelector('.boxHolder');
const size = document.querySelector('.amount');
const reload = document.querySelector('.reloading');

let gridSize = 64;

//create 256 boxes and insert them into boxholder class
function makeGrid(){
    for (i = 0; i < Math.pow(gridSize, 2); i++) {
        const boxes = document.createElement('div');
        boxes.classList.add('box')
        boxHolder.appendChild(boxes);
        boxes.addEventListener('mouseover', function (e) {
            e.target.style.background = "black";
        });
    } 
}

makeGrid();

const boxRef = Array.from(document.getElementsByClassName('box'));

size.innerHTML = "Change Size";
reload.innerHTML= "Clear";


reload.addEventListener('click', reload => {
    boxRef.forEach((box) => {
        box.removeAttribute('style')
    })
});

size.addEventListener('click', size => {
   
    let promptMe = prompt('Choose number between 1-64.');
    let gridChange = document.styleSheets[0].cssRules[2].style;
   
    if (promptMe > 64 == true){
        window.alert('You cannot go over 64! Please choose again')
        return promptMe;
    }
    boxRef.forEach((box) => {
        box.removeAttribute('style')
     });

    gridChange.setProperty('grid-template', `repeat(${promptMe}, minmax(1px, 500px)) / repeat(${promptMe}, 1fr)`);
    
    let gridSize = promptMe;

    makeGrid();
});

// have default size of 16x16
//have button show a prompt that changes the variable depending on the number you choose

 



