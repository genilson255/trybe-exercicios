let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 101, 0];
/* console.log(numbers); */



/* Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
 */
/* for(let index = 0; index <= numbers.length-1; index +=1){
    console.log(numbers[index]);
} */

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; 
/* let soma = 0;
for(let index = 0; index < numbers.length; index +=1){
    soma += numbers[index];
   
}
console.log(soma); */


/* Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos. */
/* let recebeTotal = 0;
for(let index = 0; index <= numbers.length; index +=1){
    recebeTotal += numbers[index];
}
console.log(recebeTotal); */

/* let soma = 0;
for(let index = 0; index < numbers.length; index +=1){
   soma += numbers[index] / (numbers.length);
}
console.log(soma); */

/* Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
 */
/* let soma = 0;
for(let index = 0; index < numbers.length; index +=1){
   soma += numbers[index] / (numbers.length);
   if(soma > 20){
       console.log("Valor maior que 20 ");
   }else{
       console.log("Valor menor que 20");
   }
}
 */

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

/* var receptor = 0;
for (var i = 0; i < numbers.length; i++) {
   if ( numbers[i] > receptor ) {
      receptor = numbers[i];
   }
   console.log(receptor);
} */
//var numeros = [1,2,5,200,89,5,50];
//var maior = Math.max(...numbers);
//console.log(maior) //200


/* 
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
 */

   /*  
   let bigNumber = numbers[0];
    for(let index = 1; index < numbers.length; index +=1){
        if(numbers[index] > bigNumber){
            bigNumber = numbers[index];

        }        
    }
    console.log(bigNumber); 
    */

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

/* 
let smallNumber = numbers[0];
    for(let index = 1; index < numbers.length; index +=1){
        if(numbers[index] < smallNumber){
            smallNumber = numbers[index];

        }        
    }
    console.log(smallNumber); 
    */

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let orderNumber = [2,4,6,8,10,12,14,16,18,20,22,24,1,3,5,7,9,11,13,15,17,19,21,23,25];
    for(let start = 0; start < orderNumber.length; start += 1){
        let receber = orderNumber[start];
        console.log(receber);
        
    }

/* Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
 */











