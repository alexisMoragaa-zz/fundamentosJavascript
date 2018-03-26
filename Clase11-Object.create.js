/*Object.Create
continuando con el mismo ejemplo de la clase anterior de calcular la distancia entre dos puntos
en esta ocacion lo aremos usando object.create
*/


const Punto = {//creamos un objeto de tipo punto
  init:function init(x, y){//usamos init como el constructor de nuestro objeto
    this.x = x//asignamos los valores usando el this
    this.y = y
  },
  moverX: function(x){//añadimos las funciones o metodos de nuestro objeto
    this.x += x
  },
  moverY: function(y){
    this.y += y
  },
  distancia: function(p){//creamos la funcion distancia
    const x = this.x -p.x
    const y = this.y -p.y
    return Math.sqrt(x * x + y * y )//retornamos la distancia
  }
}


const p1 = Object.create(Punto)//usamos el objeto Object, y el metodo create para crear una nueva instancia de nuestro objeto punto
const p2 = Object.create(Punto)

p1.init(0, 4)//usamos el objeto recien creado, he invocamos el metodo init, el cual estamos usando como constructor para asignar los valores correspondientes al objeto p1
p2.init(3, 0)

console.log(p1.distancia(p2))
//imprimimos la distancia entre el objeto p1, y el objeto p2


/*
-> Cuando creamos un objeto con object create, ya no creamos una funcion que nos sirva como constructor y le añadimos sus metodos con prototype.
   creamos directamente un objeto, le asignamos un constructor, en este ejemplo el constructor se llama init, pero pudes añadir el nombre que desees.
    cada elemento dentro de este objeto es una funcion, y estan separados por comas

-> Para instanciar un nuevo objeto usamos Object.create() y le pasamos como parametro el tipo de objeto
    luego usamos el objeto recien inicializado y llamamos al constructor y le pasamos los valores de nuestro objeto
*/
