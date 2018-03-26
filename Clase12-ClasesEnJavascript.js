/*Clases en javascript
con ecmacript 2015 se incluye una nueva forma de escribir  funciones con prototype
de una forma mas limpia y sencilla, pero con el mismo problema que las formas anteriores.
si desde un objeto modificamos los metodos de la clase estos cambios afectaran al resto de los objetos de la clase

esta sintaxis es muy similar a las clases que coinstruimos con java
*/

class Punto{ //definimos la clase Punto
  constructor(x, y){//añadimos el constructor de la clase punto, esto es lo primro que se ejecuta cuando llamamos a la clase
    this.x = x//asignamos los valores en el constructor de la clase
    this.y = y
  }

  moverX(x){//añadimos el metodo moverX, el cual desplaza nuestro punto x
    this.x += x
  }

  moverY(y){//añadimos el metodo moverY para desplazar nuestro punto en y
    this.y += y
  }

  distancia(p){//añadimos el metodo distancia para calcular la distancia entre nuestro punto y otro punto
    const x = this.x - p.x
    const y = this.y - p.y
    return Math.sqrt(x * x + y * y)
  }
}

let p1 = new Punto(0,4)//creamos un nuevo objeto de tipo punto
let p2 = new Punto(3, 0)

console.log(p1.distancia(p2))

/*clases
Cuando creamos un nuevo objeto de la clase lo que hacemos es crear un nuevo objeto que tiene todos los metodos y atributos de la clase
en este caso lso metodos moverx, movery, disrtancia y los atributos x, y
**/
