//funcao para gerar o email
/* constante geradorDeEmpregado = (nomeCompleto) => { */
/*   constante email = nomeCompleto.toLowerCase().split('  ').join('_'); */
/*   retorno { */
/*     nomeCompleto, email: `${email}@betrybe.com` */
/*   } */
/* }; */



const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

/* constante novoFuncionario = (callback) => { */
/*   constante funcionarios = { */
/*     id1: callback('Genilson Monteiro'), */
/*     id2: callback('Lucas Moreti'), */
/*   } */
/*   retorno funcionarios; */
/* }; */

//console.log(novoFuncionario(geradorDeEmpregado));

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
    id4: callback('Genilson Monteiro'),
    id5: callback('Lucas Moreti'),
  };
  return employees;
};
 console.table(newEmployees(employeeGenerator)); 


//Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares
// // Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
//* 3 - // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
