// Throw e Try/Catch
/* const sum = (value1, value2) => value1 + value2; */
/* console.log(sum(4 , '6')); */

/* const sum = (value1, value2) => { */
/*   if (typeof value1 !== 'number' || typeof value2 !== 'number') { */
/*     return 'Os valores devem ser numéricos'; */
/*   } */
/*   return value1 + value2; */
/* }; */
/* console.log(sum(2, 9)); */
/* 

Mas vamos detalhar por partes o que foi feito:
A palavra reservada throw serve para lançar uma exceção criada por você. No caso, definimos que não seria aceito um parâmetro que não fosse do tipo number , então criamos esse "erro customizado". Caso contrário, a função sum apresentaria um comportamento incorreto. Se quiser saber mais detalhes, consulte a documentação .
O operador new serve para criar um objeto personalizado ou nativo do JavaScript . Mais sobre o new aqui .
A palavra Error é um objeto nativo do JavaScript que representa um erro. Quando você o chama com o operador new , você cria uma cópia deste objeto, que será lançada como uma exceção no seu código. Veja mais sobre Error na documentação oficial .
Você programou o código para lançar uma exceção caso aconteceça um erro, mas o fluxo do código ainda pode ser melhorado. Você precisa, por exemplo, capturar esse erro para melhor tratá-lo. É aí que entra o bloco try/catch . Enquanto o try tenta executar o código com sucesso, o catch é chamado caso ocorra um erro.
Aproveitando a ocasião, seria uma ótima ideia refatorar a função sum para que ela não tenha funcionalidades demais.
*/

// Verifica se é um number ou se é string
/* const verifyIsNumber = (value1, value2) => { */
/*   if (typeof value1 !== 'number' || typeof value2 !== 'number') { */
/*     throw new Error('Os valores devem ser numéricos'); */
/*   } */
/* }; */
/* const sum = (value1, value2) => { */
/*   try { */
/*     verifyIsNumber(value1, value2); */
/*     return value1 + value2; */
/*   } catch (error) { */
/*     throw error.message; */
/*   } */
/* }; */
/* console.log(sum(2, 5)); */

// Objetos: Parte I - Adicionando novas chaves (keys)
/* const customer = { */
/*   firstName: 'Roberto', */
/*   age: 22, */
/*   job: 'Teacher', */
/* }; */
/* console.table(customer); */

/*
Imagine um cenário em que você precisa completar as informações do cliente adicionando uma nova propriedade para armazenar seu sobrenome. Uma das formas já vistas até então é reescrever o objeto, dessa vez já com a nova propriedade lastName .
;
*/

/* const customer = { */
/*   firstName: 'Roberto', */
/*   lastName: 'Faria', // Propriedade adicionada. */
/*   age: 22, */
/*   job: 'Teacher', */
/* }; */
/* console.table(customer); */

/*
Existem também outras formas de adicionar essa propriedade de maneira muito mais simples e prática, sem a necessidade de reescrever o objeto e suas propriedades. Veja o exemplo abaixo:
*/

/* const customer1 = { */
/*   firstName: 'Roberto', */
/*   age: 22, */
/*   job: 'Teacher', */
/* }; */
/*  */
/* console.log(customer1); */
/* console.table(customer1); */
/*  */
/* customer1.lastName = 'Faria'; */
/* console.log(customer1); */
/*  */
/* const customer2 = { */
/*   firstName: 'Maria', */
/*   age: 23, */
/*   job: 'Medic', */
/* }; */
/*  */
/* console.log(customer2); */
/* customer2['lastName'] = 'Silva'; */
/* console.log(customer2); */

const quadrinhos1 = {
  collection: 'Tio Patinhas',
  title: 'O Tesouro dos Dez Avatares',
};

// Acessar os Valores
/* console.log(quadrinhos1.collection); */
/* console.log(quadrinhos1['collection']); */

// Acrescentar uma nova entrada
quadrinhos1['author'] = 'Genilson';
/* console.log(quadrinhos1); */
/* console.table(quadrinhos1); */

/* quadrinhos1.author = 'Don Rosa'; */
/* console.log(quadrinhos1); */
/* console.table(quadrinhos1); */
// Object.keys - Chaves

/* Object.keys(quadrinhos1);  */
/* console.table(Object.keys(quadrinhos1)); */
/* console.log(Object.keys(quadrinhos1)); */
//console.log("=====================================================");
const array = Object.keys(quadrinhos1); 
//console.log(array);

//console.log("======= Abrir a mente ========");


array.push('teste');//Adicionando um novo item a lista
//console.log(array);
//console.log(array.includes('title'));// Verifica se no meu array tem a palavra/item ´title´ e retorna true se ele encontrar
//console.log(array.includes('ano'));// Ele procurar por um nome que nao tem na lista e nao achara e retornara false

//Object.values - Values
const valores = Object.values(quadrinhos1); 
//console.log(valores);

//console.log("========= Object.entries - Entradas ==========");

const entradas = Object.entries(quadrinhos1);//Mostra a tabela com todos os indices
console.table(entradas);


//console.log("============ Matriz ==============");
//console.log(entradas[0]);// 0    │ 'collection' │        'Tio Patinhas'     
//console.log(entradas[1]);//1    │   'title'    │ 'O Tesouro dos Dez Avatares' 
//console.log(entradas[2]);//2    │   'author'   │          'Genilson'  
//console.log(entradas[0][0]);//  collection  
//console.log(entradas[1][0]);// title
//console.log(entradas[2][0])// author

//console.log("========== Object.assing - Copia de objetos diferentes - quadrinhos2 e authorObject =========");


const quadrinhos2 = {
  collection: 'Sherlock Holmes',
  title: 'O cao de Baskervilles'
};
const authorObject = {author: 'Sir Doyler'};
console.log(Object.assign(quadrinhos2, authorObject));
//console.log(authorObject );

//console.log("=========== Object.assing - alterar os objetos clonados ============");
// 

const clone = Object.assign({}, quadrinhos2);
console.table(clone);
console.table(quadrinhos2);

quadrinhos2['year'] = '2022';//Adicionando chave
clone['year'] = '1985';//Adicionando chave
console.table(quadrinhos2);
console.table(clone);

// Object. assing - Copiar objetos com a mesma chave
const quadrinhos3 = Object.assign(quadrinhos2, clone);
//quadrinhos3['telehone'] = 87999939131;
console.table(quadrinhos3);
// Atenção!!! O primeiro parametro é sempre alterado e a referencia continua a mesma
console.table(quadrinhos2);
quadrinhos3['novo'] = 'referencia';
console.table(quadrinhos2);
