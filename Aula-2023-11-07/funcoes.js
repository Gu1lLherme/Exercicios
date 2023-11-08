function somar() {

    event.preventDefault(); // Impede o envio padrão do formulário

    var num1 = parseFloat(document.getElementById("valor_1").value);
    var num2 = parseFloat(document.getElementById("valor_2").value);
    var soma = num1 + num2;
    document.getElementById("resposta").innerHTML = "Resultado da Soma: " + soma;
}

function subtracao() {
    event.preventDefault();

    var num1 = parseFloat(document.getElementById("valor_1").value);
    var num2 = parseFloat(document.getElementById("valor_2").value);
    var subtracao = num1 - num2;
    document.getElementById("resposta").innerHTML = "Resultado da Subrtração: " + subtracao;

}

function multiplicacao() {
    event.preventDefault();

    var num1 = parseFloat(document.getElementById("valor_1").value);
    var num2 = parseFloat(document.getElementById("valor_2").value);
    var multiplicacao = num1 * num2;
    document.getElementById("resposta").innerHTML = "Resultado da Multiplicacao: " + multiplicacao;

}

function divisao() {
    event.preventDefault();

    var num1 = parseFloat(document.getElementById("valor_1").value);
    var num2 = parseFloat(document.getElementById("valor_2").value);
    var divisao = num1 / num2;
    document.getElementById("resposta").innerHTML = "Resultado da Divisao: " + divisao;

}

// Mior numero
const calcularButton = document.getElementById("calcularButton");
const numerosInput = document.getElementById("numerosInput");
const resultadoMedia = document.getElementById("resultadoMedia");

calcularButton.addEventListener("click", function () {
    const numerosStr = numerosInput.value;
    const numeros = numerosStr.split(",").map(Number);

    if (numeros.length === 0 || numeros.some(isNaN)) {
        resultadoMedia.textContent = "Entrada inválida";
    } else {
        const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
        const media = soma / numeros.length;
        resultadoMedia.textContent = media.toFixed(2); // Exibir a média com duas casas decimais.
    }
});



const numeros = [5, 10, 15, 20, 10, 30];
        document.getElementById("maiorNumeroResult").textContent = Math.max(...numeros);
        document.getElementById("menorNumeroResult").textContent = Math.min(...numeros);

        const matriz = [1, 2, 2, 3, 4, 2];
        const elemento = 2;
        document.getElementById("contarElementosResult").textContent = contarElementos(matriz, elemento);

        const stringOriginal = "Hello, World!";
        document.getElementById("inverterStringResult").textContent = inverterString(stringOriginal);

        const numeroFatorial = 5;
        document.getElementById("calcularFatorialResult").textContent = calcularFatorial(numeroFatorial);
        
        // Função para contar elementos
        function contarElementos(matriz, elemento) {
            return matriz.reduce((count, current) => count + (current === elemento), 0);
        }
        
        // Função para inverter uma string
        function inverterString(texto) {
            return texto.split("").reverse().join("");
        }
        
        // Função para calcular o fatorial de um número
        function calcularFatorial(numero) {
            if (numero < 0) {
                return "Não é possível calcular o fatorial de um número negativo.";
            }
            if (numero === 0 || numero === 1) {
                return 1;
            }
            let fatorial = 1;
            for (let i = 2; i <= numero; i++) {
                fatorial *= i;
            }
            return fatorial;
        }


