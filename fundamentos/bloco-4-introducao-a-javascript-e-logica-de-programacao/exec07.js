

/* 
//soma
const a = 10;
const b = 20;  
let soma;
soma = a + b;
console.log(soma);
 */
  /*   
   //subtracao 
const a = 1;
const b = 2;
let subtracao;
subtracao = a - b;
console.log(subtracao);    */

/* 
const a = 10;
const b = 5;
let multiplicacao;
multiplicacao = a * b;
console.log(multiplicacao); */
/* 
    //divisao
const a = 10;
const b = 5;
let divisao;
divisao = a / b;
console.log(divisao); */

/* 
//Modulo
const a = 11;
const b = 5;
let modulo;
modulo = a % b;
console.log(modulo); */
/* 
let number1 = 7;
let number2 = 5;
if (number1 > number2) {
console.log(number1, "É maior que:", number2);
}else{
    console.log(number2, "É maio que:", number1);
} */

/*  let opcao = 1;
 let opcao1 = 2;
 let opcao2 = 3;

 if (opcao > opcao1) {
     console.log(opcao);
 }else if(opcao1 > opcao2){
     console.log(opcao1);
 }else{
     console.log(opcao2);
 } */

 /* const valor = -2;
 
 
 let credito;
 if (valor >= 0) {
     credito = "positivo";
 } else if(valor <= 0){
    credito = "negativo";
 }else{
    credito = "Zero";
 }
 console.log(credito);
 */

/* 1) Vértices: são os pontos A, B e C
   2) Ângulos internos: a, b e c
   3) Lados: AB, AC e BC */
  /*  const ladoA = 60;
   const ladoB = 60;
   const ladoC = 60; */
   /* function areaTriangulo(ladoA, ladoB, ladoC) {
    let soma = ladoA + ladoB + ladoC;
    if(ladoA < 0 || ladoB < 0 || ladoC < 0){
         console.log(" Angulo invalido ");
    }else if(soma === 180){
     console.log(true);
    }else{
        console.log(false);
    }
       return areaTriangulo;
   }
   areaTriangulo(30, 120, 30); */

  /*  function areaTriangulo(ladoA, ladoB, ladoC) {
    let soma = ladoA + ladoB + ladoC;
        let retorno = null;
    if(ladoA < 0 || ladoB < 0 || ladoC < 0){
        retorno =" Angulo invalido ";
    }else if(soma === 180){
        retorno = true;
    }else{
        retorno = false;
    }
       return retorno;
   }
   console.log(areaTriangulo(100, -20, 60)); */

/*    Movimentos do xadrez
O rei. O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.
A rainha. A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.
O bispo. O bispo move-se ao longo da diagonal. ...
O cavalo. ...
A torre. ...
O peão.
 */

/* function kingKenn(peca){
 // let xadrez = 'rainha';
  switch (peca) {
      case 'rei':
          console.log("O rei pode mover-se em todas as direções");
            break;
        case 'rainha':
          console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
            break;      
        case 'bispo':
          console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
            break;
        case 'cavalo':
          console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");  
          break;
        case 'torre':
          console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças."); 
          break;
        case 'peao':
            console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");  
            break; 
        case 'roque':
            console.log("O roque é um movimento de defesa especial em que pode-se mover o rei e a torre do mesmo jogador ao mesmo tempo. Para realizar este movimento deve-se seguir as seguintes condições:"); 
            break;   
        case 'Promoção do peão':
            console.log("Se o peão chegar até a última fila, o jogador poderá trocá-lo por qualquer peça que desejar, exceto pelo rei ou por outro peão.");
            break;
        case 'Captura do peão':
            console.log("Se um peão contrário se deslocar 2 casas (seu primeiro movimento) e ficar ao lado de um dos seus peões, você poderá capturá-lo movendo o seu peão uma casa na diagonal.");
            break; 
        case 'Xeque e xeque-mate':
            console.log("O rei estará em xeque quando for atacado por uma ou várias peças do adversário. O xeque deve ser evitado imediatamente movimentando o rei ou qualquer outra peça. Se não for possível sair do xeque, se produzirá o xeque-mate e o jogador perderá a partida.");   
            break;
        case 'Empate':
            console.log("Clique no botão pate para solicitar ao seu adversário o final da partida por empate. Só é possível solicitar “pate” depois de um certo número de jogadas.");       
      default:
          console.log("ERRO!, Pessoa nao encontrada");
          break;
  }
  return kingKenn;
}
 kingKenn('bispo'); */

 

/* function convertNotas(porcentagem) {
    
    if (porcentagem >= 90 && porcentagem < 100) {
        console.log("A");
    }else if (porcentagem >= 80 && porcentagem < 90) {
        console.log("B");
    } else if(porcentagem >= 70 && porcentagem < 80) {
        console.log("C");
    }else if(porcentagem >= 60 && porcentagem < 70){
        console.log("D");
    }else if(porcentagem >= 50 && porcentagem < 60){
        console.log("E");    
    }else if(porcentagem >0 && porcentagem < 50){
        console.log("F");
    }else if(porcentagem < 0 || porcentagem > 100){
        console.log("ERRO!, Nao localizado");
    }
    return convertNotas;
}
convertNotas(70); */
/* 
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if . */

/* const novo = 1;
const velho = 5;
const atual = 3;
if (novo % 2 === 0 || velho % 2 === 0 || atual % 2 === 0) {
    console.log(true);
} else {
    console.log(false);    
} */

/* Escreva um programa que se inicie com dois valores em duas constantes diferentes: 
o custo de um produto e seu valor de venda. 
A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */

//-----------------------------//-----------------------------------//-----------------



