//Refatorando o codigo
// 1 Criar uma function para gerar um numero aleatório

function gerarUmRandomNumber() {
    let numeroAleatorio = Math.floor(Math.random() * 60) + 1;
    return numeroAleatorio;
}
console.log('O numero sorteado foi:', gerarUmRandomNumber());

// 2 Gerar um jogo ( Sortear os 6 numeros )
function gerateGame() {
    let megaSenaGame = [];
    for(let i = 0; 1 < 6; i += 1){
        /* megaSenaGame[i] = gerarUmRandomNumber(); */
        megaSenaGame.push(gerarUmRandomNumber());
    }
    return megaSenaGame;
}
console.log(gerateGame());


// 3 - Verifica o número de acerto - Compara-lo com o resultado da mega sena
function checkNumberOfHits(){
    
}
checkNumberOfHits();


/* let cliente = [1, 5, 19, 7, 45, 54];

let numero1 = Math.floor(Math.random() * 60) + 1;
let numero2 = Math.floor(Math.random() * 60) + 1;
let numero3 = Math.floor(Math.random() * 60) + 1;
let numero4 = Math.floor(Math.random() * 60) + 1;
let numero5 = Math.floor(Math.random() * 60) + 1;
let numero6 = Math.floor(Math.random() * 60) + 1;

let numerosSorteados = [numero2, numero2, numero3, numero4, numero5, numero6];
// Vizualizar os dois arrays

/* console.log(cliente);
console.log(numerosSorteados); */
/* let numerosAcertos = 0;

//Comparando Jogos
for (let index = 0; index < cliente.length; index += 1){
    console.log('Acertos do cliente: ', cliente[index]);
    for(let i = 0; i < numerosSorteados.length; i += 1){
        console.log('Numeros que foram sorteados:', numerosSorteados[i]);
        if(cliente[i] === numerosSorteados[i]){
            numerosAcertos = numerosSorteados + 1;
            console.log('Acertou:');
        }
    }
}
console.log('voce acertou: ', cliente);
console.log('Os numeros que foram sorteados foram:', numerosSorteados);
console.log('Qtd de Acertos', numerosAcertos);  */