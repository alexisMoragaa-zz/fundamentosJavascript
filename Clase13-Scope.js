/*Scope
Que es el scope y para que sirve

el scope es basicamente el alcance de una variable, y por ende desde donde podemos accesar a ella
para explicar mejor usaremos algunos ejemplos

-> Scope global. es cuando declaramos una variable fuera de cualquier funcion o metodo
   esta variable puede ser accesada desde dentro de cualquier funcion que nosotros creemos

-> podemos acceder al scope global desde cualquier funcion cuando usamos variables de tipo var, pero con esto
   contaminamos el scope global, y esto es algo que devemos evitar.

-> para evitar contaminar el scope global podemos usar variables de tipo let o constantes
*/


var nombre = `Alexis`//creamos una variable con scope global

function saludar(){
  console.log(`Hola ${nombre} como estas`)
  //estamos accediendo a la variable nombre, que se encuentra en scope global
}


//Ejemplo 02 Scole local
function saludoar2(){
  var nombre =`antonio`//scope local, a pesar de que en el scope global tenemos una variable llamada nombre
  //con el valor de alexis, esta funcion imprimira el nombre antonio, ya que en el scope local de esta funcion
  //existe otra variable llamada nombre con el valor antonio
  console.log(`Hola ${nombre} como estas`)
}


//Ejemplo 3 Cambiando el scope global desde una funcion
function saludar3(){
  nombre = `pedro`//si no usamos la palara reservada var, javascript esta buscando la declaracion de la variable nombre un escalon mas arriba
  //y nos permite cambiar el valor de una variable almacenada en el scope global
  console.log(`Hola ${nombre} como estas`)
  //esta funcion imprimira pedro, ya que al no usar la palabra reservada var javascript salto al scope global y modifico la variable nombre que estaba en el scope global
}

//ejemplo 04 contaminando el scope

function saludar4(){
  var nombre2 = `pablo`
  for (var i = 0; i < 10; i++) {//creamos un ciclo que iterara 10 veces
  console.log(`Hola  ${nombre2}`)
  }
console.log(i)//desde acae podemos acceder al scope de la variable i que usamos oara iterar en el ciclo
// esto deveriamos evitarlo, y para eso usamos la palara resercada let, que nos permite declarar variables que no salgan de su scope
}

//Ejemplo 05 usando let y const para no contaminar el scope

function saludar4(){//seguimos el ejemplo anterior, pero en esta ocacion usaremos let para no contaminar el scope de la funcion con la variable i
  const nombre2 = `pablo`//es una buena practica usar constantes para aquellas variables que no seran modificadas durante la ejecucion
  for (let i = 0; i < 10; i++) {
  console.log(`Hola  ${nombre2}`)
  }
console.log(i)//ya no podemos accesar al scope de la variable y, ya que ahora es una variable local de la funcion que estamos usando
}
