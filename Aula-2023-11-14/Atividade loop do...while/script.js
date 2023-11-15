//Exercício 1
// Contagem regressiva: Crie um programa que use um loop do-while para contar
//de 10 a 1 e imprima cada número no console.

let lista = [];
let num = 11;
do {
    num--;
    lista.push(num)
} while (num > 1)

document.getElementById("at-1").innerHTML = "resultado:" + lista;



//Exercício 2
//Soma até atingir um valor: Crie um programa que solicite ao usuário para
//inserir números até que a soma desses números atinja ou ultrapasse 100. Use um
//loop do-while para realizar essa tarefa.
function myFunction() {
    let soma = 0;

    do {
        let numero = parseInt(prompt("Insira um número:"));
        soma += numero;
    } while (soma < 100);
    document.getElementById("at-2").innerHTML = "A soma atingiu ou ultrapassou 100. Soma total: " + soma;

}

//Exercício 3
//Calculadora de fatorial: Escreva um programa que solicite um número ao
//usuário e use um loop do-while para calcular o fatorial desse número.



function calcularFatorial() {
    // Solicitar ao usuário para inserir um número
    let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

    // Verificar se a entrada é um número válido
    if (isNaN(numero) || numero < 0) {
        alert("Por favor, insira um número inteiro não negativo válido.");
    } else {
        // Calcular o fatorial e exibir o resultado
        let resultadoFatorial = calcularFatorialNumero(numero);
        document.getElementById("at-3").innerHTML= "O fatorial de " + numero + " é: " + resultadoFatorial;
    }
}

// Função para calcular o fatorial de um número
function calcularFatorialNumero(numero) {
    let resultado = 1;
    let contador = 1;

    do {
        resultado *= contador;
        contador++;
    } while (contador <= numero);

    return resultado;
}
