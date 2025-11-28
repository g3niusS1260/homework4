'use strict';

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