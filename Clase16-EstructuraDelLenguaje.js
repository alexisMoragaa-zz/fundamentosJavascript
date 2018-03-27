/*Estructura del lenguaje*/


//VARIABLES DEBILMENTE TIPADAS
var nombre = "alexis"
alexis = 25
alexis = new Date()
/*en javascripr no declaramos el tipo de la variable que estamos inicializando, por lo cual es posible
inicializar una variabele como string, y luego asignarle un valor numerico o una fecha
*/

//AÑADIR FUNCIONES A VARIABLES O CREAR OBJETOS CON ELLAS
var saludo = function saludar(){alert("hola")}

var objeto ={
  propiedad1:true,
  propiedad2:false
}
/*es posible añadir funciones como valores de una variable
Y crear objetos con las mismas, estos tienen propiedades, la cuales reciven su valor usando : y
cada una de estas propiedades es separada por una coma
*/


//TIPOS DE VARIABLES
const edad = 26
//esto es una constante, y apesas de ser llamado variable su valor no puede ser cambiado, tambien es conocida como constante

let edad =25
/*esta es una variable de alcance local, es util para no escapar el valor de la misma mediante el scope.
un ejemplo claro seria en un ciclo for*/

for (var i = 0; i < 10; i++) {
}
/*el scope de la variable i escapa fuera del ciclo, ya que usamos la palabra rservada var y esto genera algo llamado hoisting
lo cual vendria a ser algo como esto*/
var i = 0
for (i ; i < 10; i++) {
}
/*para evitar contaminar el scope usamos let*/


edad /*si usamos las variables sin un prefijo las estamos declarando como globales, si esto lo hacemos dentro de una funcion
esta escapara al scope de la funcion y modificara el valor de la variable global*/

//PALABRAS RESERVADAS
  /*Javascript como muchos otros lenguajes tinen palabras reservadas, las cuales no podemos usar para definir variables
    algunas de ellas son:
    -break  -case   -catch  -continue   -debugger   -default  -delete   -do   -else   -false  -finally
    -for    -function   -if   -in   -instanceof   -new  -null   -return   -switch   -this   -throw -true
    -try  -typeof   -var  -void   -while  -with

estos son nombres de funciones de javascript
  */

  //USO DE ;

  /*en javascript no es necesario el punto y coma salvo en elgunas contadas ocaciones, como las que veremos a continuacion

en javascript existen funciones que se pueden invocar inmediatamente cuando es ejecutado el scipt, estas son conocidas como
IIFE (Inmediatly Invoked Function Express), y se esciben de la siguiente forma
  */
var nombre = "alexis"
  (function saludar(nombre){
    alert(`hola ${nombre}`)
  })()

  /*el problema es que javascript lee esta sentencia de la siguiente forma
  var nombre = "alexis"(function saludar(nombre){
      alert(`hola ${nombre}`)
    })()


    por lo cual trata de acceder a la funcion nombre, la cual no existe.
     en este caso puntual, es necesrio añadir un ; ya sea al final de la declaracion de la variable, o antes de comenzar la funcion
  */
  var nombre = "alexis"
  ;(function saludar(nombre){
      alert(`hola ${nombre}`)
    })()

/*Otro ejemplo de cuando es necesario ; es cuando declaramos un arreglo sin asignarlo a una variable */

var dias = 1

[
  "lunes",
  "martes",
  "miercoles"
].foreach(function(dia)){
  console.log("dia")
}

/*en este caso pasa esacamente lo mismo que en el anterior, y lo podemos solucionar añadiendo un ; o asignando el arreglo a una variable */

var dias = 1

;[
  "lunes",
  "martes",
  "miercoles"
].foreach(function(dia)){
  console.log("dia")
}
/*------*/
var dias = 1

var dias2 =[
  "lunes",
  "martes",
  "miercoles"
].foreach(function(dia)){
  console.log("dia")
}
