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

console.log("----------------------------------------\n")

// Estruturas:
//     Estrutura de controle/decisão

if (10>100){
    console.log("10 é maior que 5") 
}else{
    console.log("10 é menor que 100")
}


let idadeDoCandidato = 19

if (idadeDoCandidato >= 18){
    console.log("\nCandidato pode dirigir!\n")
}else{
    console.log("\nCandidato não pode dirigir, volte mais tarde!\n")
}

// DESAFIO:
//faça um código que verifique se o salário do funcionário é maior que 5000, se for mostre a mensagem "Salario OK", se não mostre a mensagem "Precisa de aumento de X reais"

let salarioFunc = 3000

if (salarioFunc >= 5000){
    console.log("Salário OK\n")
}else{
    let aumentoSalario = 5000 - salarioFunc
    console.log("O funcionário precisa de um aumento de R$" + aumentoSalario.toFixed(2))
}


//     Laços de repetição (for, while)
//quero mostrar x vezes a mensagem "Senac Americana"

let controle = 0
while (controle <=10){
    
    console.log("Senac Americana")
    controle = controle + 1
}

controle = 1 //definição da variavel de controle
while(controle <=100){ //condição
    console.log(controle)
    controle = controle + 2 //incremento
}

//mostrar 10 vezes "Senac Americana"

for(let i=1; i<=10; i=i+1){
    console.log("Senac Americana")
}

for (let i = 1; i <=50; i=i+1){
    console.log(i)
}

console.log("\n")

// Arrays --> vetor,

let alunos =["João","Paulo,","Renata","Cris", "X"]
console.log (alunos)
console.log (alunos[2])
alunos [4] = "Cléber"

console.log(alunos)

alunos.push("Karen")

console.log(alunos)

let frutas = []
console.log(frutas)
frutas.push("🍌")
frutas.push("🍓")
frutas.push("🍊")
frutas.push("🍋‍🟩")
frutas.push("🍉")
frutas.push("🍅")
frutas.push("🍐")
frutas.push("🍇")
frutas.push("🍈")
frutas.push("🍒")

console.log(frutas)
frutas.splice(1,1) //remove indice do array (a partir de indice x, remover quantidade de indices)

console.log(frutas)

// Funções básicas
//reutilizar um bloco de código
function soma(num1,num2){
    let total = num1+ num2
    console.log("O resultado é " + total)
}

soma(15,20)


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
 