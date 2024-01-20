// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);  // Limita o resultado a duas casas decimais
}

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarParaReal(valorDolar) {
    const cotacaoDolar = 4.80;
    return valorDolar * cotacaoDolar;
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaEPerimetroRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(`Área: ${area} metros quadrados\nPerímetro: ${perimetro} metros`);
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaEPerimetroCircular(raio) {
    const pi = 3.14;
    let area = pi * (raio ** 2);
    let perimetro = 2 * pi * raio;
    console.log(`Área: ${area} metros quadrados\nPerímetro: ${perimetro} metros`);
}

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Testando as funções
console.log("IMC:", calcularIMC(1.75, 70));
console.log("Fatorial de 5:", calcularFatorial(5));
console.log("Valor em reais:", converterDolarParaReal(50));
calcularAreaEPerimetroRetangular(5, 8);
calcularAreaEPerimetroCircular(4);
mostrarTabuada(7);
