let array = [1,2,3,1,2,3,4,5,6,7,5,4,3,2,1,8,6,5,7,9,9,9,99999,5,4,2,1,1,2,3,4,5];
let array2 = [];
for(i = 0; i<=array.length-1;i++){
document.writeln(array[i]);
}
for(k = 0; k<=array.length-1;k++){
    let repetido = false;
    for(j=0; j<=array2.length-1;j++){
        if(array[k] == array2[j]){
            repetido = true;
        }
    }
    if(!repetido){
        array2[array2.length] = array[k];
    }
}
document.write("<p></p>");
for(i = 0; i<=array2.length-1;i++){
    document.writeln(array2[i]);
    }



