let ingredientListItems = [
    '500g de feijao',
    'Acucar',
    'Leite',
    'Sabao',
    'Margarina',
    'Tomate',
    'Macarrao',
    'Sardinha',
    'Beterraba',
    '500g de feijao',
    'Acucar',
    'Leite',
    'Sabao',
    'Margarina',
    'Tomate',
    'Macarrao',
    'Sardinha',
    'Beterraba',
    1,1,
];

let ingredientList = document.querySelector('.ingredients-list');//Chama o id/class do html

for(let i = 0; i < ingredientListItems.length; i += 1){
    let ingredients = ingredientListItems[i];//Percorre cada indice do arra 'array' com os nomes dos inten
    
    let ingredientListItem = document.createElement('li');//Cria um novo elemento li dentro da ol
    ingredientListItem = ingredients;//Pega cada indice/nomes e acrescenta na ol- ingredientList
    //ingredientListItem.className = 'ingredient-List-Item';

    ingredientList.appendChild(ingredientListItem);//Pega o item li e acrescenta a tag ol

}


/*  let listaDeingredientes = document.querySelectorAll('.ingredients-list-item'); */

/*
for(let a = 0; a < listaDeingredientes.length; a +=1){
    let element = listaDeingredientes[a];

    if (element.innerText.includes('500g de feijao')) {
    ingredientList.removeChild(element);        
    }
}
 */
 
