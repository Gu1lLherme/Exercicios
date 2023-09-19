function impar_par(){
    var numero_de_entrada = parseFloat(document.getElementById("Numero_inteiro").value);
    var resultado = document.getElementById("resultado");   


// Verifica se o valor de entrada é um número par

    if ((numero_de_entrada % 2) === 0) {
        resultado.textContent = "O numero " + numero_de_entrada + " é  par";
    } 

    else {
        resultado.textContent = "O numero " + numero_de_entrada + " é impar";
    }

}