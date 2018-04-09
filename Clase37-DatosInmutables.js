/*EN ESTA CLASE VEREMOS ESTRUCTURAS DE DATOS INMUTABLES

En javascript tenemos operadores de
= //asignacion con este operrador asignamos el valor de algo
== //comparacion con este operador estamos comparando dos valores
=== //comparacion de valor y tipo. con este operador podemos comparar objetos, con lo cual sabremos
//si un objeto tiene los mismos atributos y valores que otro

*/

let alexis = {nombre: 'alexis', apellido:'moraga', edad:25}
//creamos un objeto llamado alexis
let otroAlexis = alexis//igualamos el valor del objeto alexis a un objeto llamado otroAlexis
otroAlexis === alexis//pregunntamos si son iguales y esto nos retorna true

otroAlexis.edad = 27//cambiamos la edad de otroAlexis, lo cual como efecto secundario cambia
//la edad de alexis, ya que se esta apuntando al mismo objeto en memoria

function compleanos(persona){//creamos una funcion cunpleaños para sumarle un año a la edad de la persona
  //recivimos a la persona como parametro y le aumentamos un año
  persona.edad++
}
cumpleanos(alexis)/*llamamos la funcion cumpleanos y le pasamos como parametro alexis
esto tiene un efecto secundario en el objeto otro alexis, ya que igualmente es afectado en su
propiedad edad, la cual se aumenta igual que en el objeto alexis
*/
let contador = 0//creamos una variable contador en el scope global
function compleanos2(persona){//creamos una nueva funcion llamada cumpleanos2, la cual suma un año
  //y aumenta un contador no declarado en el scope de la funcion
  contador ++
  persona.edad++
}

cumpleanos2(alexis)
/*llamamos la funcion y tiene el mismo efecto secundario en el objeto otroAlexis, pero ademas accede
al scope global y afecta a la variable contador */

/*Este efecto secundario es conocido como efecto de lado, y afecta a variables u objetos que escapan
al scope de la funcion que estamos ejecutando. Para evitar esto uamos estructuras de datos inmutables
*/

let alexisInmutable = {nombre: 'alexis', apellido:'moraga', edad:25}

cumpleanosInmutable(persona){//creamos la funcion y pasamos como parametro una persona
  const clone = Object.assing({}, persona)
  /*La propiedad assing del objeto Object nos permite clonar un objeto con sus propiedades y valores
  esta recive como parametro un primer objeto al cual agragara las propiedades de el segundo objeto que recive
  el resultado de esta clonacion lo asignamos a una constante llamada clone */
  clone.edad++//sumamos uno a la propiedad clone
  return clone//retornamos clone
}

cumpleanosInmutable(alexisInmutable)
//esto nos retornara 26

alexisInmutable
//pero el objeto alexisInmutable continuara teniendo 25 años, que que este no fue modificado

/*¿Que esta pasando realmente con esta funcion?
en esta funcion estamos reciviendo el objeto persona, y este lo estamos clonando en un objeto completamente nuevo
y es en este nuevo objeto que modificamos las propiedades, con lo cual el objeto persona que usamos como entrada
permanece inmutable(no sufre cambios en sus propiedades), y lo que nos retorna es unnuevo objeto con los cambios realizados
*/
