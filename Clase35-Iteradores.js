/*en esta clase veremos como crear listas infinitas con javascript usando iteradores
para ejemplificar esto continuaremos con el ejemplo de fibonacci, pero en esta ocacion
por cada llamamo que realicemos a la funcion esta nos retornara el numero de fibonnacci
siguiente
*/


function fibonacci(){//creamos la funcion
  let a = 0, b = 1; //establecemos las variables con los numeros iniciales de fibonacci
  return {//retornamos un objeto con una propiedad next
    next: function(reset){//le pasamos como parametro reset a la funcion next
      if(reset) a = 0, b = 1//si reset es true restablecemos los valores
      let f = a //guardamos el valor de a en una variable auxiliar para mantenerlo

      a = b //asignamos el valor de la variable b a la variable a

      b = f + a //asignamos a la variable b el valor de f, que almacena el valor anterior de a
      // + el valor actual de a que es el valor anterior de b con lo cual nos queda
      return {value: f, done:false}
      /*primer ciclo
        a = 0
        f = a
        a = b
        a = 1

        b = f + a
        b = 1

        segundo ciclo
        a = 1//recordar que a toma el valor de b en el ciclo anterior, por lo que vale 1
        f = a
        a = b// en el cliclo anterior b era igual a a que valia 1 y f que valia 0 por lo que continua valiendo 1
        a = 1

        b = f + a
        b = 2 //como a traia el valor de 1 desde el cliclo anterior lo traspasa a f la cual queda en 1
              luego a toma el valor de b que es 1 , con lo cual b = a la suma de 1+1

        tercer ciclo
        a = 1
        f = a
        a = b
        a = 2

        b = f + a //en este ciclo f vale 1, que es el valor que a traia del cilo anterior, y a toma el valor de b
        //el cual traia el valor 2 del ciclo anterior con lo cual b seria igual a 1+2
        b = 3

        cuarto cliclo
        a = 2
        f = a
        a = b
        a = 3

        b = f + a
        b = 5
        de esta forma se calcula la secuencia de fibonacci
      */

    }
  }
}

const fibo = fibonacci()//asignamos a la constante fibo el valor de la funcion fibonacci
fibo.next().value//llamamos la funcion next de fibo, y acedemos a la propiedad valuedel objeto que retorna
fibo.next(true)//le pasamos true al parametro reset de la funcion next para resetear el closure

/*================================ iterando los primeros 20 numeros==========================*/
const fibo2 = {}//creamos un objeto vacio
fibo[Symbol.iterator] = fibonacci
//en javascript usamos los corchetes para acceder a las propiedades de los objetos, en este caso
//estamos accediendo a una propiedad llamada Symbol.iterator, de este objeto vacio, esta es una propiedad de javascript
//la cual nos permite iterar la funcion que enviamos

let i = 0//creamos una variable para contador
for(let value of fibo){
  //cuando usamos un for of lo hacemos para iterar sobre las propiedades de un objeto
  console.log(value)
  i++ //aumentamos el contador
  if(i > 20) break //creamos un caso de break, para no crear una iteracion infinita
  //cuando el contador i llege a 20 se terminara la iteracion a la funcion
}
