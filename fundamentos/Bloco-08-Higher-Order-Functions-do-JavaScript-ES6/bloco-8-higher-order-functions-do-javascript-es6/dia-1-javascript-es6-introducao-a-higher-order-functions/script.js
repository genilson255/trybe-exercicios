const newEmployees = () => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    nome: () => {
      return this.id1 + ' ' + this.id2 + ' ' + this.id3;
    }
  }
  return employees;
};
//newEmployees.id1 = "Luiza Drumont";
console.log(newEmployees.id1 = "Luiza Drumont");
