//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible 
//(hay que decir todos por los que es divisible)
let numero = parseInt(prompt("ingrese un numero"));

if (numero % 2 === 0) {
  document.write(`El numero ${numero} si es divisible en 2`);
} else if (numero % 3 === 0){
    document.write(`El numero ${numero} es divible en 3`)
} else if (numero % 5 === 0){
    document.write(`El numero ${numero}  es divible en 5`)
}  else {
    document.write(`El numero ${numero}  es divible en 7`)
}
