/*Objetos en javascript
En este ejemplo usaremos objetos para calcular la distancia entre dos puntos, estos puntos seran representados por objetos

*/

const p1 = {//creamos el objeto, para esto usamos las llaves
  x:0,//añadimos las propiedades del objeto y usamos : para añadir un valora esta propiedad
  y:4//separamos las propiedades de nuestro objeto usando una ,
}

const p2 = {
  x:3,
  y:0
}

//creamos una funcion para calcular la distancia entre los puntos
function distancia(p1,p2){
// para calcular la distancia entre dos puntos usamos una formula matematica (distancia = raiz cuadrada de x2 + y2)
  const x = p1.x - p2.x
  const y = p1.y - p2.y

  return Math.sqrt(x * x + y * y)
}


console.log(distancia(p1,p2))

/*Objetos
un objeto es una coleccion de propiedades con un nombre y valor, estas propiedades pueden ser tan simples como variables, o funciones,
Cuando un objeto tiene funciones como propiedades estas son conocidas como metodos del objeto.
 un ejemplo de objeto que hemos visto bastante es el objeto Math y hemos visto algunos de sus metodos como round(), floor(), random() etc..


Funciones usadas

sqrt() -> nos retorna la raiz cuadrada del numero que le pasamos como parametro
 */
