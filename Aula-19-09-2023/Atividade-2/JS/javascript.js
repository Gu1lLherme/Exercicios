function aposentar() {

    var idade = parseInt(document.getElementById("user-idade").value);
    var resultado = document.getElementById("resultado");

    if(idade >= 65){
        resultado.textContent = "O usúario de " + idade + " anos, pode se APOSENTAR!";
    }
    else {
        var idade_para_aposentar = 65 - idade;
        resultado.textContent = "O usúario de " + idade + " anos, precisa trabalhar mais " + idade_para_aposentar + " anos para se APOSENTAR";
    }

}