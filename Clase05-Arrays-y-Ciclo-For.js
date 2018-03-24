/*Para este ejercicio usaremos como ejemplo, cuanto corre una persona en promedio a la semana

para esto usaremos arrays y bucles for
*/

const dias = [//creamos el array, y añadimos los dias de la semana como cadenas de caracteres
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
  'domingo'
]
/*
declaramos una funcion que nos entregue un numero random entre con un minimo de 5 y maximo de 15
para esto usamos Math.random, pero como esta funcion nos retorna un numero entre 0 y 1 la multiplicamos por 10 para que nor retorne un numero entre 0 y 10
y le sumamos 5 para cumplir con la miima en caso de que retoene 0 y la maxima en caso de que nos retorne 10

esta es la misma funcion pero no esta escrita como arrowFunction

function correr(){
return Math.floor(Math.random() * 10 + 5)
}
*/
let correr = () => Math.round(Math.random() * 10) + 5

let totalKms = 0 //declaramos una variable y la usarems como contador
const l = dias.length //asignamos el valor correspondiente al largo del array a una constante llamada l, esto es para evitar calcular el largo del array en cada iteracion del ciclo
for(let i = 0; i < l; i++){//creamos un for para recorrer el array de dias
  const kms = correr() //asignamos a la variable kms el valor retornado por nuestra funcion correr
  totalKms += kms //asignamos a la variable acumulador total kms, el valor que tenia y le sumamos el valor obtenido de la funcion correr almacenado en kms

  console.log(`el dia ${dias[i]} corriste  ${kms}kms`)
}

console.log(`al final de la semana corriste ${totalKms}Kms`)
promedioKms = totalKms / l

console.log(`en promedio corriste ${promedioKms.toFixed(2)}Kms Diarios`)
/*
arrays

los arays se recorren desde el indice o posicion crearemos
cuando creamos un array añadimos los valores separados por comas, ya sean estos cadenas, o numeros

bucle for
Para crear un bucle for necesitamos de tres valores.
1 el iterador //en el ejemplo es // la ariable i
2 la condicion //en el ejemplo es dias.length, el cual representa la cantidad de elementosm o largo del array
3 como cambia el iterador // en el ejemplo aumentamos en uno el iterador por cada iteracion
*/

/*
Funciones

Math.random() -> esta funcion nos entrega un numero aleatorio entre 0 y 1 (incluye decimales)
Math.floor() -> esta funcion ayuda a redondear hacia el entero de abajo. por ejemplo, si tenemos 1.9 esta funcion nos retornara 1
Math.round() -> esta funcion nos permite redondear un numero hacia el entero mas cercano, por ejemplo si tenemos 1.4 nos redondeara hacia 1. pero si tenemos 1.6 nos redondeara hacia 2
toFixed() -> esta funcion nos permite definir la cantidad de decimales a mostrar sobre un numero, pasandole como parametro el numero de decimales que deseamos
*/
