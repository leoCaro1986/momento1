function inverNumero(){
   let numero = document.getElementById("number").value;
   let numeroinverso=0;

    while (numero>0){
        residuo=numero%10;
        numeroinverso=numeroinverso*10+residuo;
        numero = parseInt(numero/10);
        
        
    }
    alert("el numero inverso es: " + numeroinverso);
    return true;
}   
