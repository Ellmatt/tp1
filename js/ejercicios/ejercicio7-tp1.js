let numero1 = prompt('ingrese un primer numero');
 let numero2 = prompt('ingrese un segundo numero');
 let numero3 = prompt('ingrese un tercer numero');
 console.log(numero1);
 console.log(numero2);
 console.log(numero3);


 if( numero1 > numero2 && numero1 > numero3){
    document.write( 'El primer numero es el mayor: '+ numero1);
 } else if (numero2 > numero3) {
    document.write('El segundo numero es mayor: '+ numero2);
} else {
    document.write('el tercer numero es mayor: '+ numero3);
}

    