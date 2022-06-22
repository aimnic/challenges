cadena = "asdfghkjasdfhgkkjasjksdahfjsaklhslsdhjskad";
cadenaSinRepetir = "";
document.write(cadena);
for(i = 0; i<= cadena.length; i++){
    repetido = false;
    for(k = 0; k<=cadenaSinRepetir.length;k++){
        if(cadenaSinRepetir.charAt(k) == cadena.charAt(i)){
            repetido = true;
        }
    }
    if(!repetido){
        cadenaSinRepetir+=cadena.charAt(i);
    }
}
document.write("<p>" + cadenaSinRepetir + "</p>")
