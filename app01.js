// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)

let nome="Vilander"
let idade= 38

// Console e Debug

//console.log(nome)
//console.log(idade)
//console.log(nome+" tem " + idade + " anos")

nome = "Aline"
idade = 37

//console.log(nome, idade)

//Tipos de dados

// texto => String
 let cidade ="Americana"

//numérico => number

let salario = 1500.35

//booleano => boolean
let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

// Operadores
//     Operador Atribuição ( = )
//     Operadores aritméticos (+,-,*,/,%)
console.log("10 + 15\n")

let n1 = 10
let n2 = 5

console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % 3)
console.log("\n")

//     Operadores relacionais (>,<,>=,<=,==,===,!=,!==)
console.log(n1 == n2) //igualdade
console.log(n1 != n2) //diferente
console.log(n1 > n2) //maior
console.log(10 < 10) //menor
console.log(10<=10) //menor ou igual
console.log(150>=175) //maior ou igual


//     Operadores lógicos (!, &&, ||)
console.log("\n")
console.log(!10>2) //não => inverte o resultado, se for verdadeiro(true) passa a ser falso(false), se for falso(false) passa a ser verdadeiro(true)
console.log(!false) //não

console.log(10>2 && 35<100) //e
console.log(10>2 && 35<100 && n1>n2 && 100<90) //e => todas as verificações devem ser verdadeiras para o resultado ser verdadeiro(true)

console.log(10<2 || 100==150 || 57==57) //ou => basta uma das verificações ser verdadeira(true) para o resultado ser verdadeiro(true), o resultado só será falso(false) se TODAS as verificações forem falsas(false)

//DESAFIO:

let preco = 100
let precoAcrescimo = 0
let precoDesconto = 0
//faça um código que acrescenta 17% ao preço e imprima o resultado
//faça um código que desconte 7% ao preço e imprima o resultado

let acrescimo = 17/100
let desconto = 7/100

console.log(acrescimo)
console.log(desconto)


precoAcrescimo = preco + (preco * acrescimo)
precoDesconto = preco - (preco * desconto)

console.log("\nPreço com 17% de acréscimo: R$" + precoAcrescimo.toFixed(2))
console.log("Preço com 7% de desconto: R$" + precoDesconto.toFixed(2) + "\n")


// Estrutura
//     Estrutura de controle/decisão
//     Laços de repetição

// Arrays 

// Funções básicas
// Escopo


// Alterar conteúdo e atributos *
// incluir js em página html *
// Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****


// Spread e REST  ************
 