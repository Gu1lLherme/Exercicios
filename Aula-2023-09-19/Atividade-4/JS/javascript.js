function ano_bissexto(){
    var ano = document.getElementById("ano-bissexto").value;
    var resultado = document.getElementById("resultado");

    if((ano % 400) === 0){
        resultado.textContent =  "O ano " + ano + " é um ano BISSEXTO."
    }
    else{
        resultado.textContent = "O ano " + ano + " NÂO é um ano BISSEXTO."
    }
}