
//calcular el area de un triangulo de base 5 altura 7
console.log("el area de un triangulo de base 5 y altura 7 es : "+5*7/2)

//podemos escapar codigo javascript dentro de una cadena usando comillas invertidas y el signo $+ llaves
console.log(`el area de un triangulo de base 5 y altura 7 es : ${5*7/2}`)

/*podemos usar variables para no hardcodear los valores en nuestro codigo.
para declarar variables usamos la palabra rservada var,
 para declarar constante susamos const
 y para declarar variables locales usamos let
*/

let base = 5 //declaramos la base y la inicializamos como 5
let altura = 7 //declaramos la altura y la inicializamos como 7

console.log(`el area de un triangulo de base ${base} y altura ${altura} es : ${base * altura / 2}`)

/**Funciones en javascript
En javascript podemos crear 2 tipos de funciones.
anonimas: estas no requieren de un nombre, y no puden ser llamadas desde otros lugares
declarada: estas funciones por el contrario tiene un nombre, y si pueden ser llamadas desde otros lugares

para este ejemplo declararemos una funcion llamada areaTriangulo, a la cual le pasaremos como parametro la base y la altura
*/

function areaTriangulo( base, altura){

  return base * altura /2//retornamos el resultado de base por altura partido en 2
}

console.log(`el area de un triangulo de base ${base} y altura ${altura} es : ${areaTriangulo(base, altura)}`)


/**Arrow function
las arrow function nos permiten asignar funciones a variables, lo cual nos permite escribir las funciones con menos codigo

let triangleArea = (base, altura) => return base* altura /2

las arrow function nos permiten quitar la palabra reservada function, y remplazarla por los caracteres =>.
ademas si solo se ejecuta una linea de codigo podemos obviar los {}
y si solo tenemos una operacion o bariable podemos obviar la palabra return

function areaTriangulo( base, altura){

  return base * altura /2//retornamos el resultado de base por altura partido en 2
}

let triangleArea = (base, altura) => return base* altura /2


estas funciones son iguales en funcionalidad
*/

let triangleArea = (base, altura) => return base* altura /2

/*ejercicio clase 02. CREAR FUNCION PARA CALCULAR EL AREA DE UN CIRCULO

*/
