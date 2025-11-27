'use strict';
const styleBlock = document.getElementById('style-demo');
const originalStyles = styleBlock.style.cssText;

function changeColor(){

    styleBlock.style.color = 'lightblue';
}

function changeSize(){

    styleBlock.style.width = '300px';
    styleBlock.style.height = '100px';
}

function addBorder(){

    styleBlock.style.cssText += `
    border-radius: 20px;
    box-shadow: 3px 3px 10px black;
    `;
}

function resetStyles(){
    styleBlock.style.cssText = originalStyles;
}
