/*Ejecutar funciones de forma asincrona
*/

setTimeout(function callback(){//01 usamos la funcion setTimeout y le pasamos como callback una funcion llamada callback
  console.log(`ya pasaron 3 segundo`)
},3000)

console.log(`Hola`)

// =========================Ejemplo 02=========================
setTimeout(function callback(){//01 usamos la funcion setTimeout y le pasamos como callback una funcion llamada callback
  console.log(`A`)
},0)

console.log(`B`)//02

// =========================Ejemplo 03=========================
setTimeout(function callback(){//01 usamos la funcion setTimeout y le pasamos como callback una funcion llamada callback
  console.log(`A`)
},1000)

for (var i = 0; i < 1999999999; i++);// 02
//usamos un for muy largo para trabar la pila de ejecucion


console.log(`B`)//03
 /*Por que se ejecuta primero el mensaje b y despues el a?
esto sucede debido a que javascript ejecuta el codigo de manera sincrona, con lo cual lo primero que entra a la pila
es la funcion setTimeout, esta es enviada al navegador, este resuelve el tiempo de espera, y una vez cumplido el tiempo
de espera lo añade a la cola de ejecucion

Mientras esto sucede javascript continua con la siguiente instruccion, y una vez terminadas las tareas pendientes en la pila
javascript revisa la cola de ejecucion entregada por el navegador para ser procesada nuevamente en la pila de ejecucion

es por esto que aunque le pasemos 0 al setTimeout este se ejecuta despues de el mensaje b

pero que pasa si como en el ejemplo 3 tenemos una parte del codigo que traba la ejecucion

en este caso ocurre lo mismo que en el anterior, primero se nos mostrara el mensaje b y luego el a
-> en este jemplo lo primero en cargarse es el setTimeout, el cual es delegado al navegador,
-> posteriora esto pasa con el cilo for
-> luego se ejecuta el console.log con el mensaje b
->Finalmente javascript revisa la ola de ejecucion del navegador y ejecuta la funcion callback con el mensaje a

en este ejemplo en particular el ciclo for traba la pila de ejecucion, con lo cual apesar de estar cumplido el tiempo del
setTimeout este no se ejecutara mientras la pila de ejecucion no este limpio, por lo que tiene que esperar
que termine el ciclo y luego el console.log con el mensaje b antes de poder ejecutarse, apesar de estar su tiempo ya cumplido




Que es un callback
->un callback es una funcion, que le pasamos como parametro a otra funcion, esta segunda funcion, o calback solo se ejecutara
cuabdi la funcion padre se ejecute


 */
