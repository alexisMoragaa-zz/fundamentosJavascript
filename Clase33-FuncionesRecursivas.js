/*Para ver las funciones recursivas usaremos como ejemplo la serie de fibonacci
Las funciones recursivas se retornan a si mismas,

estas necesitan 2 elementos fundamentales,

un caso base, lo cual retornara un valor sin entrar a la recursividad

y un caso recursivo, que se retorne n cantidad de veces hasta llegar al caso base
*/


function fibonaci(num){//declaramos  la funcion
  if(num == 1)return 0//este es nuestro caso base, el cual retorna 0 o 1
  if(num == 2)return 1//este es nuestro caso base, el cual retorna 0 o 1
console.log(`${num-1} y ${num-2} total ${num-1 + num-2}`)
  return fibonacci(num -1) + fibonacci(num -2)
  //este es el caso recursivo, el cual se llama a si msimo hasta llegar al caso base
}

fibonacci(1)//0
fibonacci(2)//1
fibonacci(3)//1
fibonacci(4)//2
fibonacci(5)//3
fibonacci(6)//5
fibonacci(7)//8
fibonacci(8)//13


//en este ejemplo llamamos a la funcion fibonnaci y le pasamos como parametro un indice, el cual nos retornara el
//numero de fibonaci almacenado en el
/*
indices -> numeros
       ->    0
2      ->    1
3      ->    1
4      ->    2
5      ->    3
6      ->    5
7      ->    8
8      ->    13
*/
