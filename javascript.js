const boxHolder = document.querySelector('.boxHolder');
const size = document.querySelector('.amount');
const reload = document.querySelector('.reloading');

let gridSize = 64;

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

size.innerHTML = "Change Size";
reload.innerHTML= "Clear";

const boxRef = Array.from(document.getElementsByClassName('box'));

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

    gridChange.setProperty('grid-template', `repeat(${promptMe}, minmax(1px, 500px)) / repeat(${promptMe}, minmax(1px, 500px))`);
    
    let gridSize = promptMe;

    makeGrid();
});

// I presume that the size issue you're having is that page doesn't respond if grid size is set too big. 
//That's because you're doing a new size calculations for each and every square that gets added.  
//try moving that part of code to a separate variable an use that to draw grid.

 



