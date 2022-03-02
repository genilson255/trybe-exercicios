const button = document.querySelector('#buttonSubmit');//Esse é o botao
let inputNameUser = document.querySelector('#inputNameUser');//Esse é o camṕo de input nome
const nameUser = document.querySelector('#nameUser');//Onde a mensagem sera exibida

//Função para uso quando clicar no botao nada acontecer
function getUserValue(event){  
  event.preventDefault(); 
  /* console.log(inputNameUser.value); */
  nameUser.innerText = inputNameUser.value;  
}
button.addEventListener('ckick', getUserValue);

const contando = document.querySelector('#count');
/* console.log(contando); */
let numAcertos = [
  'acerto1 = 1',
  'acerto2 = 4',
  'acerto3'];

function countHits(){
  let start = 0;
  for(let i =0; i < this.i; i+=1){

  }
}
