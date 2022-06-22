var num = parseInt(prompt("Numero:"));
var numInicial = num;
var invertido = 0;
while(num >= 0){
    invertido = invertido*10 + (num%10);
    num = Math.floor(num/10);
}
document.write("<p> El numero a invertir es: " + numInicial + " </p>")
document.write("<p> Invertido: " + invertido + " </p>");
