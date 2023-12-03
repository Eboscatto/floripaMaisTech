const form = document.querySelector("form");
form.addEventListener("submit", function(evento) {
    evento.preventDefault()
    calcular()
})

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const opcoes = document.getElementById("opcoes");
const resultadoCalculo = document.getElementById("resultado-calculo")

function calcular(){
    switch(opcoes.value){
        case "adicionar":
            adicionar()
            break;
        case "subtrair":
            subtrair()
            break;
        case "dividir":
            dividir()
            break;
        case "multiplicar":
            multiplicar()
            break;
        case "expoente":
            expoente()
            break;
        case "resto":
            resto()
            break;
    }
}

function adicionar(){
    let resultado = Number(numero1.value.replace(",", ".")) + Number(numero2.value.replace(",", "."))
    resultadoCalculo.innerText = `O resultado da ADIÇÃO é: ${resultado}`
}

function subtrair(){
    let resultado = Number(numero1.value.replace(",", ".")) - Number(numero2.value.replace(",", "."))
    resultadoCalculo.innerText = `O resultado da SUBTRAÇÃO é: ${resultado}`

}

function dividir(){
    let resultado = Number(numero1.value.replace(",", ".")) / Number(numero2.value.replace(",", "."))
    resultadoCalculo.innerText = `O resultado da DIVISÃO é: ${resultado}`

}

function multiplicar(){
    let resultado = Number(numero1.value.replace(",", ".")) * Number(numero2.value.replace(",", "."))
    resultadoCalculo.innerText = `O resultado da MULTIPLICAÇÃO é: ${resultado}`
}

function expoente(){
    let resultado = Number(numero1.value.replace(",", ".")) ** Number(numero2.value.replace(",", "."))
    resultadoCalculo.innerText = `O resultado da EXPONENCIAÇÃO é: ${resultado}`
}

function resto(){
    let resultado = Number(numero1.value.replace(",", ".")) % Number(numero2.value.replace(",", "."))
    resultadoCalculo.innerText = `O RESTO da divisão é: ${resultado}`
}