const boxHolder = document.querySelector('.boxHolder');
const size = document.querySelector('.amount');

let gridSize = prompt("Please choose a number between 1-100!");

size.innerHTML = "Change Size";
size.addEventListener('click', makeGrid, false);
//create 256 boxes and insert them into boxholder class
function makeGrid(){
    for (i = 0; i < 256; i++) {
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
const reload = document.querySelector('.reloading');

reload.innerHTML= "Clear";
reload.addEventListener('click', reload => {
    boxRef.forEach((box) => {
        box.removeAttribute('style')
    })
});


console.log(gridSize);

 



