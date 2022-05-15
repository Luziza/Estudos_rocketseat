//document.write("testetstetts");
//alert("Deu certo");
//alert(2+3);

//var a = 2;
//var b = 3;
//var c = a+b;
//alert("A soma deu: " + c);

//var nome = prompt("Informe o seu nome:");
//alert("Olá, " + nome);

//var prova1 = 9
//var prova2 = 8
//var media = (prova1 + prova2) / 2;
//if (media >= 7){
//    alert("Aprovado");
//}
//else{
//    alert("Reprovado");
//}

var sair = confirm("Confirme antes de sair ")
if (sair == 1){  //verdadeiro = 1, falso = 0
    window.location = 
    'https://www.google.com.br/'
}

var vezes = 0
var lista = []

while (vezes <= 5 ){
    var numero = prompt("insira um numero")
    lista.push(numero);
    vezes = vezes + 1;
}

alert(lista)




