function validar_senha(){
    var primeira_senha = document.getElementById("user-password").value;
    var segunda_senha =  document.getElementById("user-confirm-password").value;
    var resultado = document.getElementById("resultado");
    
    if (segunda_senha != primeira_senha) {

        resultado.textContent = "Senha inválida, Digite Novamente!!!"
    }
    else {
        resultado.textContent = "Senha Correta!!!"
    }
}