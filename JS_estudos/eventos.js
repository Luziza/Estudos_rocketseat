function carreguei(){
// document = a página html onde esse javascript foi chamado
// getElementById() procura e pega um elemento que tem o id, por exemplo o log
//inner = eu quero introduzir esse elemento no html
// += adiciona "carreguei <br>"
    document.getElementById("log").innerHTML += "carreguei <br>" ;
}

function redimensionei(){
    document.getElementById("log").innerHTML += "redimensionei <br>"
}

// -------------------------------------------------------------------------------------------//

//onclick = clicar 1 vez
//ondblclick = clicar 2 vezes (clique rápido)

function umClique(){
    document.getElementById("imagens").src="imagens/perfil2.jpg";
    document.getElementById("log").innerHTML += "Perfil 2 <br>"
}

function doisCliques(){
    document.getElementById("imagens").src="imagens/perfil.jpg";
    document.getElementById("log").innerHTML += "Perfil 1 <br>"
}