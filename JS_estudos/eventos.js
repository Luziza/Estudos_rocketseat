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

//----------------------------------------------------------------------------------------------//
//EVENTOS INPUT
//onBlur = Quando você sai do campo de input
//onFocus = Quando vc entra no campo
//onChange = mudança de conteudo do campo
//onSelect = quando o texto é selecionado
//onSubmit = quando o formulario é submetido, quando clicamos em enviar formulario
//onReset = botao de reset é clicado
//onKeyDown = digita algo, pressiona a tela
//onKeyUp = solta a tecla

function submeti(){
    document.getElementById("log").innerHTML += "submeti<br>";
    return false;
  }
  function resetei(){
    document.getElementById("log").innerHTML += "resetei<br>";
  }
  function saiDoCampo(){
    document.getElementById("log").innerHTML += "sai do campo<br>";
  }
  function mudei(){
    document.getElementById("log").innerHTML += "mudei<br>";
  }
  function entreiNoCampo(){
    document.getElementById("log").innerHTML += "entrei no campo<br>";
  }
  function selecionei(){
    document.getElementById("log").innerHTML += "selecionei<br>";
  }
  function teclaBaixo(){
    document.getElementById("log").innerHTML += "tecla para baixo<br>";
  }
  function teclaCima(){
    document.getElementById("log").innerHTML += "tecla para cima<br>";
  }

//------------------------------------------------------------------------------//
//EVENTOS MOUSE
//onMouseOver = mouse passando por cima
//onMouseOut = mouse saindo de cima
//onMouseDown = pressiona algo em algo
//onMouseUp = soltando algo
//onMouseMove = movimentando o mouse sobre o elemento

function sobre(){
    document.getElementById("log").innerHTML += "mouse em cima<br> ";
  }
function paraBaixo(){
    document.getElementById("log").innerHTML += "mouse pressionado <br> ";
  }
function movendo(){
    document.getElementById("log").innerHTML += "mouse se movendo<br>";
  }
function saindo(){
    document.getElementById("log").innerHTML += "mouse saindo<br>";
  }
function paraCima(){
    document.getElementById("log").innerHTML += "mouse solta<br>";
  }
