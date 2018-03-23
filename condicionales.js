/*Condicionales
para representar condicionales usaremos como ejemplo una pelicula con restriccion, a la cual solo puedan
asistir mayores de 13 años

*/

const starWars7 = 'Star Wars:El Despertar de la Fuerza'//declaramos una constante con el nombre de la pelicula
const pgStarWars7 = 13 //declaramos una constante con la edad necesaria para ingresar a ver la pelicula

const myName = 'Alexis' //creamos una constante con el nombre de una pesona
const myAge = 25// creamos una constante con la edad de esta persona

const nameBasti = 'bastian'//creamos una constante con el nombre de otra persona
const ageBasti = 4 //creamos una contante con la edad de esta otra persona


function canWatchStarWars7(name , age){//declaramos una funcion que recive como parametro el nombre y la edad
  if (age >= pgStarWars7){//dentro del if preguntamos si la constante age, es igual o mayor que pgStarwars7
    alert(`${name} puede pasara a ver ${starWars7}`)//si es mayor mostramos un alert con el mensaje puede pasar a ver la pelicula
  }else{//si la edad es menor a la minima mostramos un mensaje indicando que no puede ver la pelicula
    alert(`${name} no puede pasaar a ver ${starWars7}. por que tiene ${age} y necesita tener como minimo ${pgStarWars7}`)
  }
}


canWatchStarWars7(myName, myAge);//llamamos a la funcion, y le enviamos los parametros
canWatchStarWars7(nameBasti, ageBasti);//llamamos a la funcion y le pasamos los parametros

//pero que pasa si adicionalmente agregamos la condicion, de queun menor de 13 años puede pasar si esta acompañado por u adulto

const starWars7 = 'Star Wars:El Despertar de la Fuerza'//declaramos una constante con el nombre de la pelicula
const pgStarWars7 = 13 //declaramos una constante con la edad necesaria para ingresar a ver la pelicula

const myName = 'Alexis' //creamos una constante con el nombre de una pesona
const myAge = 25// creamos una constante con la edad de esta persona

const nameBasti = 'bastian'//creamos una constante con el nombre de otra persona
const ageBasti = 4 //creamos una contante con la edad de esta otra persona


function canWatchStarWars7(name , age, isWithAdult = false){//añadimos el campo isWithAdult y lo dejamos en default como false
  if (age >= pgStarWars7){//dentro del if preguntamos si la constante age, es igual o mayor que pgStarwars7
    alert(`${name} puede pasara a ver ${starWars7}`)//si es mayor mostramos un alert con el mensaje puede pasar a ver la pelicula
  }else if(isWithAdult){//si la primera condicion no se cumple para a la siguiente sentencia, en este caso al esle if
    alert(`${name} puede pasar a ver la pelicula por que esta acompañado de un adulto`)
  }
  else{//si la edad es menor a la minima mostramos un mensaje indicando que no puede ver la pelicula
    alert(`${name} no puede pasaar a ver ${starWars7}. por que tiene ${age} y necesita tener como minimo ${pgStarWars7}`)
  }
}

//la misma funcion escrita con arroy functions
let canStar = (name, age, isWithAdult)=>{
  if (age >= pgStarWars7){//dentro del if preguntamos si la constante age, es igual o mayor que pgStarwars7
    alert(`${name} puede pasara a ver ${starWars7}`)//si es mayor mostramos un alert con el mensaje puede pasar a ver la pelicula
  }else if(isWithAdult){//si la primera condicion no se cumple para a la siguiente sentencia, en este caso al esle if
    alert(`${name} puede pasar a ver la pelicula por que esta acompañado de un adulto`)
  }
  else{//si la edad es menor a la minima mostramos un mensaje indicando que no puede ver la pelicula
    alert(`${name} no puede pasaar a ver ${starWars7}. por que tiene ${age} y necesita tener como minimo ${pgStarWars7}`)
  }
}


canWatchStarWars7(myName, myAge);//llamamos a la funcion y le enviamos los parametros
canWatchStarWars7(nameBasti, ageBasti, true);//llamamos a la funcion y le enviamos los parametros, incluyendo el tercer parametro (isWithAdult)
