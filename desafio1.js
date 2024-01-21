// funcoes.js

// Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log("Olá, mundo!");
}

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome(nome) {
    console.log("Olá, " + nome + "!");
}

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(numero) {
    return numero * 2;
}

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaTresNumeros(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorEntreDois(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function multiplicacaoPorEleMesmo(numero) {
    return numero * numero;
}
