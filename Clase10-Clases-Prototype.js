/*Clases en javascript
Javascript no tiene Clases propiamente tal, pero si prototipos
en este para mostrar el uso de prototipos continuaremos con ele ejemplo de las clases 08-09 para calcular la distancia entre dos puntos
*/

function Punto(x,y){ //creamos un objeto punto
  this.x = x,//usamos el this, para referirnos a esta instancia en particular, de esta forma cuando creemos un nuevo objeto nos estaremos refiriendo a ese nuevo objeto
  this.y = y
}

Punto.prototype.moverX = function moverX(x){this.x += x}
//usamos prototipe, para añadir las funciones o metodos a nuestro objeto
Punto.prototype.moverY = function moverY(y){this.y += y}

Punto.prototype.distancia = function distancia(p) {
  const x = this.x - p.x
  const y = this.y - p.y
  return Math.sqrt(x * x + y * y)
}
//creamos una funcion llamada distancia que calcula la distancia entre un punto y otro, esta funcion pertenece al objeto punnto, por lo cual es llamada desde un punto, y recive como parametro un segundo punto

const p1 = new Punto(0 , 4)//instanciamos un nuevo punto usando la palabra reservada new
const p2 = new Punto(3 , 0)//lo que hacemos basicamente es transformar la constante p1, y p2 en un nuevo objeto de tipo punto, con lo cual heredan todos las propiedades y metodos de el objeto punto

console.log(p1.distancia(p2))
//imprimimos en pantala la distancia entre el punto 1 y el punto 2 usando el metodo distancia desde el punto uno pasando como parametro el punto 2

/*this
Usamos this para referenciar una instancia en particular.
de esta forma cuando creamos el objeto p1, nos referimos a la propiedad x del objeto p1, y lo mismo con p2, o cualquier otro objeto creado a partir de este objeto

Prototipos
Los ptototipos se diferencian de las clases, ya que si los mismos son modificados desde alguno de sus objetos, los demas objetos seran afectados segun la modificacion
es decir, si desde p1, modifico la estructura del prototype, p2, y todos los demas puntos que heredan este prototipo seran afectados por la modificacion
*/
