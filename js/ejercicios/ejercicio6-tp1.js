let numero1 = prompt('ingrese un primer numero');
 let numero2 = prompt('ingrese un segundo numero');


 if( numero1 > numero2){
    document.write('el primer numero es el mayor: '+ numero1);
 }  else if (numero1 === numero2) {
    document.write('ambos numeros son iguales: ' + numero2);
 } else if (numero1 < numero2){
    document.write('el segundo numero es el mayor: ' + numero2);
 }