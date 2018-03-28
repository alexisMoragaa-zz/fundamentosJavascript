/*This, _this
el contexto en javascript lo determina el this. y este objeto puede almacenar distintos valores dependiendo del contexto en el que se encuentre
para representar esto crearemos una clase persona, y un metodo que liste a nuestros amigos
*/

class Persona{//creamos la clase persona
  constructor(nombre, amigos = []){//creamos el constructor de nuestra clase persona
    this.nombre = nombre//usamos this para decirle que este nombre es iguala nombre
    this.amigos = amigos//hacemos lo mismo con amigos le decimos, este amigo, en este contexto es igual a amigos
//usamos el this para referirnos al contexto en el cual nos encontramos
  }

  listarAmigos(){//creamos la funcion listar amigos, que recorre el array de amigos y los imprime con console.log()
    const _this = this//guardamos el valor de this, para poder usarlo dentro del foreach
    this.amigos.forEach(function(amigo){//this en este contexto hace referencia al objeto persona, y con el punto
      //le decimos que acceda a la propiedad amigos de este objeto, por lo cual en el contexto del foreach this = a amigos
      console.log(`Hola mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
/*Si usamos directamente el this para acceder a la propiedad nombre tendremos un error, esto es devido a que en el contexto
del foreach this es igual a amigos, para solucionar esto guardamos el valor de this en una variable y luego usamos esta variable*/
    })
  }

//Existen otras formas de realizar esto sin guardar ek valor de this en una variable por ejemplo usando bind() o arrow Functions

listarAmigos2(){//creamos la funcion listar amigos, que recorre el array de amigos y los imprime con console.log()
  this.amigos.forEach(function(amigo){//this en este contexto hace referencia al objeto persona, y con el punto
    //le decimos que acceda a la propiedad amigos de este objeto, por lo cual en el contexto del foreach this = a amigos
    console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
  }.bind(this))
  /*cuando usamos bind, como segundo parametro del foreach, le estamos diciendo que use el this, que esta en el contexto del objeto
  dentro de la funcion. es decir, si usamos bind enviamos el this que tiene como valor el objeto persona al interior de la funcion*/
}

listarAmigos3()
  this.amigos.forEach((amigo)=>{//si remplazamos la funcion del foreach por un arrow function no es necesario agregar el bind
    //ya que este viene implicito en las arrows Function
    console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
    })
  }
}



const alexis = new Persona("alexis",["valentina", "bastian","agustin"])//creamos una nueva instancia de la clase pesona

alexis.listarAmigos()//llamamos al metodo listarAmigos desde la instancia recien creada

alexis.listarAmigos2()

alexis.listarAmigos3()

/*
funciones
-> foreach() foreach es una funcion que ejecuta una funcion por cada elemento del array

-> bind() esta funcion trae al scope local de una funcion el contexto externo del this, y nos permite usar ese contexto dentro de la funcion
*/
