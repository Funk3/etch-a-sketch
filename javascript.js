const boxHolder = document.querySelector('.boxHolder');


//create 256 boxes and insert them into boxholder class
for (i = 0; i < 256; i++) {
    const boxes = document.createElement('div');
    boxes.classList.add('box');
    boxHolder.appendChild(boxes);
};

function changeColor() {

}

boxHolder.addEventListener('onmouseover', changeColor());





