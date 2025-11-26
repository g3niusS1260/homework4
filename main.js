'use strict';
const text = document.getElementById('text-element');
const originalText = document.getElementById('text-element').textContent;
function changeText(){
    text.textContent =  'Текст был изменен!';
}

function addText(){
    text.textContent += '(дополнено)';
}

function resetText(){
    text.textContent = originalText;
}