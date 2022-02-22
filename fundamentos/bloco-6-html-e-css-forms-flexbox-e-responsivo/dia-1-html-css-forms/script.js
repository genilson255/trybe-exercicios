

/* window.onload = function(){
    alert('Deu certo');
} */
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

function capturarAcap(event){
    event.preventDefault();
    console.log(hrefLink.value);
    hrefLink.innerHTML = hrefLink.value;
}
inputCheckbox.addEventListener('click', capturarAcap); 