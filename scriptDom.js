
function exibirNome()
{
    let elemento_meu_nome;

elemento_meu_nome=document.getElementById("meu_nome");

// elemento_meu_nome.innerText = "Everaldo"

elemento_meu_nome.innerHTML = "<h2>Everaldo</>"

elemento_meu_nome.style.color = "blue" // altera cor do nome

elemento_meu_nome.style.backgroundColor = "red" // altera cor de fundo
}
