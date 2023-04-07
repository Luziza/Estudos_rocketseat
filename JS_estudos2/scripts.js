let nota = 8

if (nota < 6){
    console.log("F")
}else if(nota >=6 && nota <7){
    console.log("D")
}else if(nota >=7 && nota < 8){
    console.log("C")
}else if(nota >= 8 && nota < 9){
    console.log("B")
}else if(nota >= 9){
    console.log("A")
}

//let salario = sum[1200, 1250, 1200]
//let gasto = sum[130, 1234.50, 300, 500]

//if((salario - gasto) > 0){
//    console.log("Seu saldo está positivo")
//}else{
//    console.log("Seu saldo está negativo")
//}


//------------------------------------------------------------------
//Converte celcius para farenheit e vice e versa

function ConverteCelciusForF(celcius){
    calculo = (celcius * (9/5)) + 32
    return calculo
}

function ConverteFaForCelcius(fahrenheit){
    calculo = (fahrenheit - 32) * (5/9)
    return calculo
}

console.log(ConverteCelciusForF(20))
console.log(ConverteFaForCelcius(68))

//--------------------------------------------------------------------
/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];


console.log(booksByCategory.length)
// pq assim não funciona -> console.log(booksByCategory.books.length) ?????

for(let category of booksByCategory){
    console.log(category.books.length)
    console.log(category.author.length)
}