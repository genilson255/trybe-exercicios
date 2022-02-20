

function generateRandomNumer() {
    let numberRandom = Math.floor(Math.random() * 60) + 1;
    return numberRandom;
}
console.log('O numero sorteado foi:', generateRandomNumer());
function gerateGame() {
    let megaSenaJogo = [];
    for(let i = 0; 1 < 6; i += 1){
        /* megaSenaGame[i] = gerarUmRandomNumber(); */
        megaSenaJogo.push(generateRandomNumer());
    }
    return megaSenaJogo;
}
console.log(gerateGame());
