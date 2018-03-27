/*Clousures
que es un clousure
Un closure es la combinación de una función y el ámbito léxico en el que se declaró dicha función.
Es decir los closures son funciones que manejan variables independientes.
 En otras palabras, la función definida en el closure "recuerda" el ámbito en el que se ha creado.

para explicar lo que es el clousure realizaremos un ejemplo con una funcion para saludar familias con nombre y apellidos
*/



function saludarFamilia(apellido){
//creamos una funcion llamada saludarFamilia que que recive como parametro el apellido ynos retorna una segunda funcion llamda saludar
  return function saludar(nombre){
//creamos una segunda funcion que recive como parametro el nombre y nos retorna un saludo con el nombre y el apellido.
//esto es el clousure, ya que desde una funcion interna accedemos a parametros de usu funcion padre
    console.log(`Hola ${nombre} ${apellido}`)
  }
}


const saludarGomez = saludarFamilia("Gomez")
//creamos una llamada a la funcion saludar familia y le pasamos como parametro el apellido gomez,
// como la funcion saludarFamilia retorna otro funcion es esta funciona la que guardamos en una constante llamada saludarGomez,
//de esta forma guardamos el parametro gomez, dentro de la constante, y el clousure lo recordara cuando realicemos el llamado a saludarGomez
const saludarPerez = saludarFamilia("perez")

saludarGomez("pedro")
//llamamos ala funcion saludar gomez y le enviamos como parametro el nombre,
// ya que la funcion saludarGomez tiene guardado el apellifo en el clousure
saludarGomez("juan")
saludarGomez("diego")

saludarPerez("sergio")
saludarPerez("lucho")
saludarPerez("sandro")


//reto de la clase crear una funcion que añada un prefijo que enviamos como parametro a una palabra que eniaremos como parametrp

function makePrefixer(prefijo){//creamos una funcion llamada makePrefixer que nos retornara una segunda funcion

  return function addPrefix(palabra){//creamos la segunda funcion y le pasamos como parametro la palabra
    console.log(`${prefijo}${palabra}`)//hacemos console.log del prefijo antecediendo a la palabra
  }
}

const prefijoRe = makePrefixer("re")//instanciamos la funcion prefijoRe y le pasamos como parametro re

prefijoRe("malo")//usamos la funcion prefijoRe y le pasamos como parametro la palabra,
//la funcion prefijoRe recuerda ek contexto en el que se creo y guarda el prefiijo en el clousure
