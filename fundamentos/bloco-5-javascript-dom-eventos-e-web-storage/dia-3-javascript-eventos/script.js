/* const v1 = document.getElementById('car1');
const v2 = document.getElementById('car2'); 

function moveCar(){
    let newCar = document.createElement('');
}
 */
/* function corridaMaluca(){
    const 
} */
//Trabalhando com eventos
/* function magicFunction(){
    console.log('Abracadabra!');
}
 */



// Function para testes
 function teste(){
    console.log('Éeeeeeee, funcionouoooooooooo!');
} 
//Chamando e evento
/*  window.onload = function (){
    let button = document.querySelector('#start-race-btn');
    button.addEventListener('click', teste)
}; 
 */
let car1 = document.querySelector('.car1');
let car2 = document.querySelector('.car2');
car1.style.marginLeft = '0';
car2.style.marginLeft = '0';
window.onload = function (){
    let button = document.querySelector('#start-race-btn');
    button.addEventListener('click', function(){
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 100 + 'px'; 
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 100 + 'px';
    });
}; 
