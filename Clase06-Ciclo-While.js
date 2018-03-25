/*Ciclo while
Para mostrar el uso de ciclos while emularemos una pelea entre goku y superman
Cada uno de los contrincantes partiran con 100 puntos de vida
en cada turno los contrincantes daran un golpe comprendido entre 5 y 12 puntos, el contruncante que logre mas puntos atacara en esa ronda
el proceso se repite hasta que uno de los dos contrincantes se quede en 0 o menos

*/

let VidaGoku = 100 //instanciamos la vida inicial de goku en 100
let VidaSuperman = 100//instanciamos la vida inicial de superman en  100

const MIN_POWER = 5//establecemos el poder del golpe minimo
const MAX_POWER = 12//establecemos el poder del golpe maximo

let round = 0 //iniciamos el round en 1, esto nos servira para saber en cuantos rouns termina la pelea

const siguenVivos = () => VidaGoku > 0 && VidaSuperman > 0
//creamos una funcion que nos retorna true si ambos tienen mas de 0 en vida, y false si uno de estos llega a 0 o menos
const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER)) + MIN_POWER
//creamos una funcion para calcular un golpe con poder aleatoreo minimo 5 y maximo 12 para esto usamos Math.random que nos retorna un numero entre 0 y 1,
//luego lo multiplicamos por la diferencia entre el golpe maximo - el golpe minimo, en este caso 7, y le sumamos el golpe minimo. de esta forma si nos retorna 0, 0*7 es 0, mas 5  es 5. por el contrario si retorna 1, 1*7 es 7, mas 5 es 12
while(siguenVivos()){
    round ++
  //usamos un while para dar una iteracion al bloque de codigo hasta que la funcion siguenVivos retorne false
  console.log(`Round ${round}`)//imprimimos por pantalla el numero de round
  const golpeGoku = calcularGolpe()//llamamos a la funcion calcularGolpe y asignamos el valor a la variable golpeGoku
  const golpeSuperman = calcularGolpe()//llamamos a la funcion calcularGolpe y asignamos el valor a la variable golpeSuperman

  if(golpeGoku > golpeSuperman){//preguntamos si el golpe de goku es mas fuerte que el golpe de superman
    console.log(`Goku ataca a superman con un golpe de ${golpeGoku}`)//si es correcto goku ataca a supermar
    VidaSuperman -= golpeGoku//y le resta a sus puntos de vida el total del golpe
    console.log(`Superman queda con ${VidaSuperman}Pts de vida`)//mostramos la vida restante de superman
  }else{//si no es correcto, y el golpe de superman es mas poderoso
    console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`)//superman ataca a goku
    VidaGoku -= golpeSuperman//y le resta a su vida el total de los puntos de ataque
      console.log(`Goku queda con ${VidaGoku}Pts de vida`)//mostramos la vida restante de superman
  }

}
const gokuVive = () => VidaGoku > 0
//creamos una funcion que retorne true si goku tienene mas de o puntos de vida, y false en el caso contrario
if(gokuVive()){//verificamos si gocu gano la pelea
  console.log(`Goku gano la pelea y quedo con ${VidaGoku}Pts de Vida`)//si gokuVive retorna true lo anunciamos como ganador
}else{
  console.log(`Superman gano la pelea, y quedo con ${VidaSuperman}Pts de Vida`)//si gokuVive retoena false anunciamos como ganador a superman
}





/*Operadores
&& -> operador i, se usa para evaluar que mas de una expresion. en ele ejemplo usamos el operador && para que retorne true,
 solo si la vida de goku y la de superman son mayor a 0. en el caso de que una de las dos sea 0 o menor a 0 la funcion retornara false

Funciones

while(){} -> este es un ciclo, que repite un bloque de codigo una y otra vez, hasta que se cumpla la condicion que establescamos
*/
