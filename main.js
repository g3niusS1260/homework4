'use strict';

const block = document.getElementById('task5');

const originalBlocksStyle = block.style.cssText;

function updateName(){
    const inputName = document.getElementById('name-input');

    const nameAtTheMoment = document.getElementById('user-name');

    nameAtTheMoment.innerText = inputName.value;
}

function updateTitle(){
    const inputTitle = document.getElementById('title-input');

    const titleAtTheMoment = document.getElementById('user-title');

    titleAtTheMoment.innerText = inputTitle.value;
}

function updateBio(){
    const inputBio = document.getElementById('bio-input');

    const bioAtTheMoment = document.getElementById('user-bio');

    bioAtTheMoment.innerText = inputBio.value;
}

function highlightProfile(){

    const buttons = document.querySelectorAll('button');

    block.style.cssText = `
    margin: 0 auto;
    width: 250px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border: 2px, green, solid;
    padding : 6px 6px 6px 6px`;

    for(let i of block.children){
        i.classList.add('user-form-element');
    }

    for(let i of buttons){
        i.classList.add('user-form-button');
    }
}

function resetProfile(){
    block.style.cssText = originalBlocksStyle;
    
    for(let i of block.children){
        i.classList.remove('user-form-element', 'user-form-button')
    }
}