//Comentários //

//Fundamentos
// var nome = "valor"
var minhaVariavel = "Olá, Mundo";

console.log(minhaVariavel)

/*Comentário multi linhas
Comentário
Comentário
*/

//Variáveis e tipos de dados
//numerico
var meuNumero = 10;
//texto
var meuTexto = "Olá";

//confere tipo de dados a variável está configurada
console.log(typeof meuNumero);

var booleano = true;

console.log(typeof booleano);

//variavel do tipo objeto
var meuObjeto = {};

var meuArray = [];

var meuNull = null;

var meuUndefined = undefined;

//identificar e mostrar os tipos de dados
console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuUndefined);


// let e const
//novas formas de declarar variáveis

let x = 10;
const y = 5;

console.log(typeof x, typeof y);

console.log(x, y);

// Operadores aritiméticos

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

//operadores de comparação
//se é igual
console.log(x == y);
//se é diferente
console.log(x != y);

//compara se o tipo e o valor é igual (SEMPRE UTILIZE ASSIM E NAO ASSIM ==)
console.log(x === y);
//compara se o tipo e o valor é diferente (SEMPRE UTILIZE ASSIM E NAO ASSIM !=)
console.log(x !== y);

//Operadores lógicos
//AND &&
//OR ||

//so vai retornar true se as 2 condições forem verdadeiras
console.log(x > 5 && y > 1);
//se 1 delas não for verdadeira retorna false
console.log(x > 5 && y > 10);

//vai retornar false quando os 2 lados forem false
console.log(x < 5 || y > 10);
//se 1 delas for verdadeira retorna true
console.log(x > 5 ||y > 1);


//Conversão de tipos

const meuNumero2 = "123"

const meuNumeroConvertido = Number(meuNumero2);

console.log(typeof (meuNumero2));

console.log(typeof (meuNumeroConvertido));

//Extrutura de condição - if, else, else if

const idade = 15

if (idade < 13) {
    console.log("Criança");
} else if (idade < 20) {
            console.log("Adolescente");
        } else {
    console.log("Adulto");
}


//Switch

const fruta = "terra"
switch(fruta) {
    case "Banana":
            console.log("Banana é fruta!")
            break;
    case "Maçã":
            console.log("Maça é a fruta!")
            break;
    //caso nenhum case atenda a comparação utiliza-se um default
    default:
            console.log("Nao é uma fruta");
            break;
}


//Extrutu de repetição
// 1,2,3,4,5,6... => dependendo da condição
//loop
// contador, condição de limite, incremento


for (let i = 0; i < 5; i = i + 1) {
    //concatenação + 
    console.log("O valor de i é: " + i);
}

for (let j = 1; j < 5; j++) {
    //concatenação + 
    console.log("O valor de j é: " + j);
}

//while
//variavel fica fora do loop
let k = 0;
while (k < 5) {
    console.log("Valor de K é: " + k);
    k++;
}

//do while
let l = 0;

do {
console.log("O valor de l é: " + l);
l++
} while(l < 5)


//funções
//function nome(arg1,arg2) {corpo}
function cumprimentar(nome) {
    console.log("Olá " + nome)
}

//invocação da função e atribuindo um valor ao argumento nome
cumprimentar("Matheus");

//escopo de variaveis
//global
let cor = "Azul"

console.log(cor);

//local
function mostrarCor() {
    let cor = "Verde";
    console.log(cor);
}

mostrarCor();


//hoisting = içamento
//pode usar antes da declaração
function testeHoisting() {
    console.log("Deu Certo");
}

//arrow function

const testeArrow = () => console.log("Isso tambem é uma função");
//invocação
testeArrow();

//truthy e falsy
const minhaVariavel1 = "" // falsy
const minhaVariavel2 = "Algum texto"

//sem valor na variavel ela retorna false
if (minhaVariavel1) {
    console.log("É verdadeiro!");
} else {
    console.log("É false!")
}

//com valor na variavel ela retorna verdadeiro
if (minhaVariavel2) {
    console.log("É verdadeiro!");
} else {
    console.log("É false!")
}

//Array - listas

const numeros = [1,2,3,4,5]
console.log(numeros);
//indice sempre começa pelo numero 0 (zero)
console.log(numeros[0]);

console.log(numeros[2]);
//coloca um elemento no array
numeros.push(6);

console.log(numeros);
//remove um elemento do array
numeros.pop(2);
console.log(numeros);

//string
const minhaString = "Olá, Mundo!";

const minhaStringConcat = minhaString + " Como você está?";
//normal
console.log(minhaString);
//concatenada
console.log(minhaStringConcat);

//interpolação
const minhaString2 = `${minhaString} Como você está?`;
console.log(minhaString2);

//metodos
console.log(minhaString2.length); // mostra a quantidade de caracteres
console.log(minhaString2[5]); // mostra o caracter que vc colocar como indice
console.log(minhaString2.toUpperCase()); // mostra o texto em MAIUSCULO


//data e hora
//pega a data e hora atual
const agora = Date();
console.log(agora);
//determina uma data para exibição
const natal = new Date(2024,11,25);
console.log(natal);

//math
// pi
console.log(Math.PI);
//arrendodar um numero
console.log(Math.round(3.6));
//raiz quadrada
console.log(Math.sqrt(25));
//potencia
console.log(Math.pow(2, 3));



