// 1 - Onde eu quero adicionar esse elemento?
// Esse elemento existe no meu JS?
let container = document.getElementById('first');
// 2 Como criar um elemento HTML?
let newDiv = document.createElement('div');
// 3 Como adicionar classe a esse elemento?
newDiv.className = 'red circle small';
// 4 Como adicionar ao arquivo HTML
container.appendChild(newDiv);

let newDiv2 = document.createElement('div');
newDiv2.className = 'green circle small';
container.appendChild(newDiv2);

//Criação do elemento div
let newDiv3 = document.createElement('div');
newDiv3.className = 'yellow circle small';
//Adicinando o elemento
container.appendChild(newDiv3);

//Criação do elemento div
let redondo = document.createElement('div');
redondo.className = 'circle red small';
//Adicinando o elemento
container.appendChild(redondo);
