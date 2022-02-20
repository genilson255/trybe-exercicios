//Criar funcao para gerar um numero aleatorio
function gerarNumeroAleatorio() {
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    return randomNumber;
}
    //console.log(gerarNumeroAleatorio());
//2 - Gerar um jogo que (sorteia os 6 numeros)
function sorteio() {
    let numeros = [];
    for(let n = 0; n < 6; n += 1){
        numeros[n] = gerarNumeroAleatorio();
    }
    return numeros;
}    
//console.log(sorteio());

// 3 Verificar o numero total de acertos - Comparar
function verificarAcertos(person, sorteado) {
    let numberHits = 0;
   for(let i = 0; i < person.length; i += 1){
        console.log('Voce acertou:', person[i]);
        for(let m = 0; m < sorteado.length; m += 1){
            console.log('Os numeros sorteados foram:', sorteado[m]);
            if(person[i] === sorteado[m]){                                  
                numberHits +=1;
                console.log("Acertou!");
            }
        }
   }
   return numberHits;
}

//4 Numeros que o cliente apostou // person chama a function
let numerosApostado = [22,23,1,2,7,8,4,10,3,2];
let totalSorteado = sorteio();

//5 Numeros que o cliente acertou
console.log('Numeros da pessoa', numerosApostado);
console.log('Numeros da Maquina ', totalSorteado);
console.log('Total de acertos', verificarAcertos(numerosApostado, totalSorteado));