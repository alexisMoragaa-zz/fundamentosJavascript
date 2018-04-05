/*Memorizacion
algo que nos pasa cuando usamos funciones recursivas, es que estas en algunas ocaciones
se ejecutan demaciadas veces para llegar a un resultado.
para disminuir la contidad de veces que se ejecuta una funcion recursiva usaremos
memorizacion

la memorizacion consiste en recordar un valor en un determinado momento de la ejecucion

*/
let contadorRecursivo = 0//creamos una variable contador para ver cuantas veces se ejecuta esta funcion
function fibonacciRecursivo (num){//creammos la funcion
  contadorRecursivo ++//aumentamos el contador en 1 cada vez que se ejeccuta la funcion
  if(num == 1 ) return 0//creamos el caso base para finalizar la recursividad
  if(num == 2 ) return 1//creamos el caso base para finalizar la recursividad

  return fibonacciRecursivo(num -1) + fibonacciRecursivo(num - 2)
//creamos el caso recursivo
}
fibonacciRecursivo(20)
//llamamos a la funcion recursiva sin memorizacion
console.log(contadorRecursivo)//imprimimos en consola el contador recursivo
//esta funcion se ejecuta 13529 veces


// ==================Memorizacion==========================

let contadorMem = 0//creamos un contador para la funcion con memorizacion
function fibonacciMem (num, mem = {}){
  //creamos la funcion y como segundo argumento tiene un objeto
  contadorMem ++//aumentamos el contador
  if(mem[num]) return mem[num]//preguntamos si el objeto mem tiene algo en su propiedad num, si es asi lo retoenamos
  if(num == 1 ) return 0//preguntamos si el valor de num es 1 o 2 y retornamos
  if(num == 2 ) return 1//preguntamos si el valor de num es 1 o 2 y retornamos

  return mem[num] = fibonacciMem(num -1, mem) + fibonacciMem(num - 2,mem)
  //Asignamos el valor de esta operacion a la propiedad num del objeto men y realizamos el llamado nuevamente
}

fibonacciMem(20)//llamamos a la funcion
console.log(contadorMem)//llamamos al contador
//esta funcion se ejecuta 38 veces
