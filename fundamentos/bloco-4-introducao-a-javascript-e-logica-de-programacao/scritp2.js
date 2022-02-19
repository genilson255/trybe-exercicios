/* let estudante = {
    nome: "Genilson",
    idade: 36,
    hardSkills: 3,
    softSkills: 4,
    carreiraSkills: 5
}
function trybe(estudante){
    const pessoaDesenvolvedora = estudante;
    pessoaDesenvolvedora.hardSkills = 10;
    pessoaDesenvolvedora.softSkills = 10;
    pessoaDesenvolvedora.carreiraSkills;
    pessoaDesenvolvedora.trybe = true;
    return pessoaDesenvolvedora;
}
 */
// PARTE 1 - functions
//Função morningGreeting



/* //Função sem retorno
function morningGreeting(){
    console.log("Bom dia!");
}
morningGreeting();

//Função com retorno
function morningGreeting(){
    return  "Bom dia!";
}
 console.log(morningGreeting());  */
 /* let retorno = morningGreeting(); */

//Função com parametro
/* function morningGreeting3(nome){
    return 'Bom dia,' +  nome + ' ! ';
}
console.log(morningGreeting3(' Genilson'));
console.log(morningGreeting3(' Cida'));
console.log(morningGreeting3(' Maysa'));
console.log(morningGreeting3(' Maiara'));
console.log(morningGreeting3(' Mateus')); */// Console.log serve para mostrar o que a funcao encontrou


//Função soma - dois numero
/* function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
}
console.log(fullName('Maiara', 'Monteiro')); */


//Bonus - lessThan - else desnecessario

/* function lessThan(numero1, numero2){
    if(numero1 < numero2){
        return numero1;
    }else{
        return numero2
    }
}
console.log(lessThan(6,6)); */

/* function lessThan(numero1, numero2){
    if(numero1 < numero2){
        return numero1;
    }
        return numero2
    
}
console.log(lessThan(6,1)); */



//Parte 2 - Objetos
/* let person = {
    name: "Pedro",
    birthDate: 10/10/2000,
    colorPele: 'amarelo',
    eyeColor: 'dark',
    heigth: 1.77,
    nickName:{ name: 'Pedro', author: 'Moises' },
} */

//Dot notation - atribuicao
//person.name = "Genilson Monteiro";
/* person.birthDate = 23/02/1985
person.eyeColor = 'Castanho';
person.heigth = 1.90;
person.colorPele = "Negra";
 */
//Dot notation - Acessando

//console.log(person.name);
/* console.log(person.birthDate);
console.log(person.eyeColor);
console.log(person.heigth);
console.log(person.colorPele); */

//Bracket notation - Acessando
//person['name'] = "Mateus";
/* person['birthDate'] = 23021985
person['eyeColor'] = 'Azuis';
person['heigth'] = 1.45;
person['colorPele'] = "Loiro"; */

//Bracket notation - Acessando
//console.log(person['name']);
/* console.log(person['birthDate']);

console.log(person['eyeColor']);
console.log(person['heigth']);
console.log(person['colorPele']); */

let person = {
    name: "Pedro",
    birthDate: 23021985,
    colorPele: 'amarelo',
    eyeColor: 'dark',
    heigth: 1.77,
    nickName:{ name: 'Pedro', author: 'Moises' },
}

// for in - key
for ( let key in person){//Mostra somente as chaves - acessa as chaves
    console.log(key);
} 

// for in - person[key]
 for ( let key in person){// Todo o objeto - [acessa os valores
    console.log(person[key]);
} 
//Sempre que precisarmos acessar as propriedades de um objeto de forma dinamica, utilizamos a notação por colchetes.
/* for ( let key in person){// Todo o objeto - [acessa os valores
    console.log(person.key); // Dot notation nesse caso nao funciona
}  */