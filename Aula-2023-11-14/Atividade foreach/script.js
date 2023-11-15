//Atividade loop foreach


//1. Soma dos Números Pares:
//Crie um array chamado numeros contendo números pares.
//Utilize o método forEach para iterar sobre o array e calcular a soma dos
//números pares

let sum = 0;
const num = [1,2,3,4,5,6,7,8,9];

num.forEach(myFunction);


function myFunction(item){
    if(item % 2 === 0)
        sum += item;
}

document.getElementById("at-1").innerHTML = sum;


//2. Modificação de Elementos:
//Crie um array chamado valores contendo alguns números.
//Use o método forEach para multiplicar cada valor por 2 e armazenar o
//resultado de volta no mesmo array.
//Imprima o array modificado no console.

let valores = [1, 2, 3, 4, 5];
let newValores = []

valores.forEach(resu);

function resu(valor){

    valor *= 2;
    newValores.push(valor);


}

document.getElementById("at-2").innerHTML = newValores;


//3. Iteração Básica:
//Crie um array chamado cores contendo pelo menos cinco cores
//diferentes.
//Use o método forEach para percorrer o array e imprimir cada cor no
//console.
//Imprima a soma no console.


let cores = ["azul", "branco", "preto", "rosa", "marrom"]
let newColors = []
cores.forEach(function(cor){
    newColors.push(cor)
    document.getElementById("at-3").innerHTML = newColors;

})




