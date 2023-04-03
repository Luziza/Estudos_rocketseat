console.log("olá mundo")

//Object
console.log({
    nome: "Luiza"
})

//Array
console.log(["Luiza", "Arthur"])

//------------------------------------------------------

//variaveis
//VAR
var clima = "Quente"
//a var clima agr fica sendo frio em vez de quente
clima = "Frio"
console.log(clima)

//------------------------------------------------------

//LET
let clima2 = "Quente"
//let clima2 agr fica sendo frio em vez de quente
clima2 = "Frio"
console.log(clima2)

//CONST
//se colocarmos outro clima3 ele não ira ser alterada e vai dar erro
const clima3 = "Quente"
console.log(clima3)

//------------------------------------------------------

console.log(typeof clima)

//agrupamento de delarações
let age, nome1

age = 17
nome1 = "luiza"

console.log(nome1 + " tem " + age + " anos")

//usando a crase
console.log(`${nome1} tem ${age} anos `)

//----------------------------------------------------------
const person = {
    nome : "Luiza",
    idade : 19,
    isAdmin : true
}

console.log(person.nome) //mostra só o nome
console.log(person) //mostra tudo

//---------------------------------------------------------
const animals = [
    "lion",
    "bear",
    "cat"
]

console.log(animals[0])
console.log(animals.length) //ve o tamanho da lista

console.log("palavra".length)  
console.log(12678.34554.toFixed(2)) 

var increment = 0
increment++
console.log(increment)

//--------------------------------------------------------
var beijo_do_arthur = false
var cheiro_do_arthur = true

const felicidade = beijo_do_arthur && cheiro_do_arthur ? 'sou feliz' : 'tristeza profunda'
console.log(felicidade)

//--------------------------------------------------------

