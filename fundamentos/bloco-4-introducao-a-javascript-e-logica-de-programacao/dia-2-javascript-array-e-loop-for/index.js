//Refatorando o codigo
// 1 Criar uma function para gerar um numero aleatório
function generateRandomNumer() {
    let numberRandom = Math.floor(Math.random() * 60) + 1;
    return numberRandom;
}
console.log('O numero sorteado foi:', generateRandomNumer());

// 2 Gerar um jogo ( Sortear os 6 numeros )
function gerateGame() {
    let megaSenaJogo = [];
    for(let i = 0; 1 < 6; i += 1){
        /* megaSenaGame[i] = gerarUmRandomNumber(); */
        megaSenaJogo.push(generateRandomNumer());
    }
    return megaSenaJogo;
}
console.log(gerateGame());


// 3 - Verifica o número de acerto - Compara-lo com o resultado da mega sena
/* function checkNumberOfHits(){
    
}
checkNumberOfHits(); */
