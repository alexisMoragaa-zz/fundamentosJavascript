/*Operaciones con arrays

en muchas ocaciones usamos siclos para recorerr arrays y realizar operaciones con ellos,
pero los arrays traen consigo algunas funciones como reduce, map, y filter que nos ayudan con las tareas mas cotidianas sin tene que usar cilos

*/

//ejemplo 01. pasarle a una funcion un numero indeterminado de parametros, sumarlos entre si y retornar el resultado

function suma(...numeros){// creamos una funcion y le pasamos como parametro un spread operator
  return numeros.reduce(function(acum, numero){//retornamos el resultado de la funcion reduce
    acum += numero//sumamos el valor correspondiente a la posicion del array actual al acumulador
    return acum//retornamos a la funcion reduce el valor de acum he iteramos nuevamente
  },0)//la funcion reduce recive dos parametros, en primer lugar la funcion, y en segundo lugar el indice desde el que comenzara, en este caso 0
}
const sum = (...numeros) => numeros.reduce((acum,numero) => acum += numero)
//reescibimos la funcion como una arrow function
console.log(sum(2,3))

console.log(suma(4,5))//imprimimos el resultado del llamado a la funcion


//ejemplo 02 crear una funcion que nos retorne el doble de los numeros que le pasemos como parametros

function dobles(...numeros){//creamos una funcion que nos entrege el doble de los numeros que le pasamos

  return numeros.map(function(numero){//retornamos el resultado de map
    return numero * 2//por cada elemento del array retornamos el doble de su valor
  })
}


const db = (...numeros) => numeros.map(numero => numero * 2)
//misma funcion que dobles, pero escrita como arrow function
console.log(db(10,22,45))
console.log(dobles(5,6,10,25))//llamamos a la funcion y le enviamos los parametros


//ejemplo 03 crear una funcion que solo nos retorne los numeros pares

function pares(...numeros){//creamos la funcion
  return numeros.filter(function(numero){//retornamos el resultado de filter
    return numero % 2 == 0//evaluamos si el numero es par en base al reiduo de la divicion por 2 del numero y retornamos true o false
  })
}
const paress = (...numeros) => numeros.filter(numero => numero % 2 == 0 )
//reescrivimos la funcion como un arrow function

console.log(paress(3,4,5,6,7,8,9))//llamamos a la funcion
console.log(pares(3,4,5,6,7,8,9))//llamamos a la funcion

/*
-> Spread operator Las funciones en javascript nos permiten pasarles un spreed operator (operador de desarmar), lo cual transforma todos los parametros
    que le enviamos a una funcion en un array, para usar el spread operator le pasamos a la funcion como parametro tres puntos y el nombre que represente los parametros (...nombre)

->reduce() El método reduce() aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.

-> map() map recive una funcion que se ejecutara por cada uno de los elementos del array

->filter() al igual que map recive una funcion y la ejecuta por cada elemento de array, esta funcion recibe una condicion y guarda los emelentos del array que cumplan con la condicion


-> push() El método push agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
*/
