'use strict';

function addSimpleContent(){
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый текстовый блок';

    document.body.append(newParagraph);
}

function addHTMLContent(){
    const newBlock = `
    <div class="newBlock">
        <h2>Динамически добавленный заголовок</h2>
    </div>`;

    document.body.innerHTML += newBlock;
}

function clearContent(){
    const container = document.getElementById('dynamic-content');

    container.innerHTML = null;
}