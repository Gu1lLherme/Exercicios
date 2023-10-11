function media_aluno(){
    
    var nota_um = parseFloat(document.getElementById("user-primeira-nota").value);
    var nota_dois = parseFloat(document.getElementById("user-segunda-nota").value);
   
    var media_do_aluno = ((nota_um + nota_dois) / 2);
    var resultado = document.getElementById("resultado");

    if(media_do_aluno === 10){
        resultado.textContent = "O aluno está APROVADO com DISTINÇÂO, média final " + media_do_aluno
    } 
    else if(media_do_aluno >= 7 ){
        resultado.textContent = " O aluno está APROVADO, média final " + media_do_aluno
    }
    else{
        resultado.textContent = "O aluno está REPROVADO, média final " + media_do_aluno
    }



}