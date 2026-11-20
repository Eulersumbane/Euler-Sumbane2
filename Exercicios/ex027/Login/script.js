const botaoLogin=document.querySelector("button");
const circulo = document.querySelector(".circle");

botaoLogin.addEventListener("click", function(event){
    
    event.preventDefault();

    circulo.classList.add("animar");
});