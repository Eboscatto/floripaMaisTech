/*
let nome;
nome = window.prompt("Qual o seu nome?")
window.alert(`Olá ${nome}`)

*/

let valor_a;
let  valor_b;

//Perceba o que acontece!
valor_a = window.prompt("Qual o primeiro número?")
valor_b = window.prompt("Qual o segundo número?")
window.alert(`O 1º valor é ${valor_a} e, o 2º valor é ${valor_b} e, a soma dos valores é: `+ (valor_a + valor_b))

window.alert("A soma dos valores é: " + (parseInt(valor_a) + parseInt(valor_b)))