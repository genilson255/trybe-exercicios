/* const acordando = () => { */
/*   return "Acordando!!"; */
/* } */
//console.log(acordando());

/* const tomarCafe = () => { */
/*   return 'Bora tomar café!!'; */
/* } */
//console.log(tomarCafe());

/* const irDormir = () => { */
/*   return 'Partiu dormir!!' ; */
/* } */
//console.log(irDormir());

// nomeDoArray.nomeDaHOF((functionParametro));
//ou nomeDoArray.nomeDaHOF(()=> {});

/* const nomeDoArray = [201, 21, 301, 41, 501, 18]; */
/* const loopComFor = (array) => { */
/*   for (let i = 0; i < array.length; i += 1) { */
/*     //console.log(`Elemento com o For:`, array[i]); */
/*     //console.log(`Elemento i com fom:`, i); */
/*    // console.log(`Elemento array com for:`, array.sort());     */
/*   } */
/* } */
//loopComFor(nomeDoArray);

// loopComFor(nomeDoArray);
// loop com forEach
// nomeDoArray.nomeDaHOF((functionParametro));
//ou nomeDoArray.nomeDaHOF(()=> {});
// =======> FOREACH NÃO RETORNA NADA <======
// nomeDoArray.nomeDaHOF(()  => {});
//nomeDoArray.forEach((element, i, array)=>{
 /* console.log(`Elemento com o For:`, element); */
 /* console.log(`Elemento i com fom:`, i); */
 /* console.log(`Elemento array com for:`, array.sort()); */
//});

const meuArray = [201, 21, 301, 41, 501, 18];
//Every - tradução (Todos/todas)
//Retorna do array = true ou false
//Só retorna true quando TODOS os elementos do array passem pela sua validação 
// nomeDoArray.nomeDaHOF((functionParametro));
//ou nomeDoArray.nomeDaHOF(()=> {});
const retornoEvery = meuArray.every((elemento) => elemento % 2 === 0)
console.log(`Algum elemento do array é par ? ${retornoEvery}`);

// Some - tradução(Algum/Alguma)
// Retorno do some - true ou false
// Retorna true se ao menos UM dos elementos do array passem pela avaliação
// nomeDoArray.nomeDaHOF((functionParametro));
//ou nomeDoArray.nomeDaHOF(()=> {});
const retornoSome = meuArray.some((elemento) => elemento % 2 === 0)
console.log(`Algum elemento do array é par ? ${retornoSome}`);

// Find - tradução(procurar)
// ela encontra o primeniro elemento conforme a a validação e retorna
// Abaixo em portugues: encontre o primeiro elemento que é valido e divisivel por 2
// nomeDoArray.nomeDaHOF((functionParametro));
//ou nomeDoArray.nomeDaHOF(()=> {});
const retornoFind = meuArray.some((elemento) => elemento % 2 === 0)
console.log(`Algum elemento do array é par ? ${retornoFind}`);
