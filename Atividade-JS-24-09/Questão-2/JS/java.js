function conversor(){
    var data = new Date();

    var dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
    
    var resultado = document.getElementById("resultado");

    resultado.textContent = dataFormatada
}