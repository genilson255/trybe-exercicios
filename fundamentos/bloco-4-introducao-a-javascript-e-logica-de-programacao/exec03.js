const nota = 5;
let nome = "Mariana"
if (nota < 80) {
    console.log("Parabéns, você foi aprovada(o)!");
    
}else if(nota > 60 && nota < 80){
    console.log("Você está na nossa lista de espera");
}else if (nota < 60) {
    console.log("Voce foi reprovado");
}else{
    console.log("continue estudando!");
}