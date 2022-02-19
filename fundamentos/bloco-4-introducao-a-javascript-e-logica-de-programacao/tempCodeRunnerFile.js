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
