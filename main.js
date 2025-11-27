'use strict';

function safeOutput(){
    let safeOutp = document.getElementById('safe-output');
    console.log(safeOutp.textContent);
}

function unsafeOutput(){
    let unsfOutp = document.getElementById('unsafe-output');
    console.log(unsfOutp.innerHTML);
}