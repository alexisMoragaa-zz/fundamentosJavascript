/*
para este ejemplo crearemos un lenguaje a partir de una serie de reglas
ingresaremos un texto, y manipularemos el string, en base a una serie de reglas para retornar un texto nuevo

==>REGLAS

1. si la palabras termina en "ar" se le quitan estas ultimas dos letras //programar = program
2. si la palabra comienza co z se le agrega pe al final //zorro = zorrope
3. si la palabra tiene mas de 10 letras se deve partir por la mitad y unir con un gion medio //abecedario = abce-dario
4. si la palabra es un palindromo ninguna regla anterior cuenta, se retorna la misma palabra intecalando entre mayusculas y minusculas //sometemos = SoMeTeMoS

REGLAS<==
*/

function platzom(str){
  let translation = str
  //regla 1 cortar los ultimos dos caracteres de las palabras que terminen con `ar`
  if(str.toLowerCase().endsWith(`ar`))
    //pasamos la cadena a minusculas y preguntamos si termina con `ar`
    translation = str.slice(0,-2)
    //si la sentencia es correcta cortamos la cadena menos sus ultimos dos caracteres y la asignamos a la variable translate

//regla 2 añadir pe al final de las palabras que comienzan con `z`
  if(str.toLowerCase().startsWith(`z`))
    //pasamos la cadena a minusculas y preguntamos si comienza con `z`
    translation += `pe`
    //si la condicion es corecta agregamos `pe` al final

//regla 3 separar la spalabras con mas de 10 caracteres por la mitad
  const length = translation.length //creamos una constante con el largo de caracteres de la cadema
  if(length >=10){// preguntamos si el largo de la cadena es mayor o igual a 10
    //si la sentencia se cumple separamos la cadena por la mitad usando slice, y dividiendo la cadena por la mitad con Math.round
    const firtHalf = translation.slice(0, Math.round(length / 2))
    const secondHalf = translation.slice(Math.round(length / 2))
    translation = `${firtHalf}-${secondHalf}`//creamos una nueva cadena usando las partes antes obtenidas y añadiendo un `-` entre las dos partes
  }


//regla 4
const reverse = (str) => str.split('').reverse().join('')
//transformamos nuestra cadena  en un array,añadiendo un caracter a caa posicion y luego recorremos el array en forma inversa, luego unimos nuevamente la cadena
function minMay(str){
  const length = str.length//guardamos el largo de caracteres
  let translation =''//inicializamos translation como una cadena vacia
  let capitalize = true //inicializamos capitalize como true
  for(let i = 0;i <= length; i++){//usamos un for para iterar una vez por cada caracter que contenga la cadena
    const char = str.charAt(i)//tomamos solo el caracter correspondiente a la iteracion
    translation += capitalize ? char.toUpperCase(): char.toLowerCase()
    //a translation le añadimos el valor de chart, y dependiendo del valor de capitalize usando el operador ternario ? definimos si ponemos el caracter en mayusculas, o en minusculas
    capitalize = !capitalize //asignamos a capitalize el valor contrario al que tenia
  }
    return translation
  }

  if( str == reverse(str)){//preguntamos si nuestra cadena es igual al resultado de nuestra funcion reverse
    return minMay(str)//si la sentencia es verdadera usamos la funcion minMay() para convertir la cadena a mayusculas y minusculas
  }
  return translation//retornamos el resultado de translate
}

console.log(platzom(`programar`))
console.log(platzom(`zorro`))
console.log(platzom(`zarpe`))
console.log(platzom(`abecedario`))
console.log(platzom(`sometemos`))
/*
*Operadores*

+= -> este operador  nos permite sumar un valor al valor actual. esta  operacion var += x es el equivalente a var = var + x
? -> este es un operador ternario, y sirve para evaluar una condicion y ejecutar una u otradependiendo del resultado (basicamente es un if)
! -> operador diferente, se usa para indicar que algo es diferente de otra cosa, en el ejemplo usado capitalize = !capitalize estamos diciendo que capitalize tome el valor diferente de capitalize
    con lo cual si capitalize esta en true tomara false, y si esta en false tomara true
    
*Funciones usadas*

toLoweCase() -> transforma toda la cadena a minusculas

toUpperCase() ->transforma toda la cadena a mayusculas

endsWith() -> permite consultar si una cadena termina con siertos caracteres

startsWith() -> permite consultar si una cadena comienza con algun caracter

slice() -> permite cortar una cadena de caracteres, recive como primer parametro el caracter desde el que comenzara a cortra y como segndo parametro la cantidad de caracteres a cortar
         si le pasamos como segundo parametro un numero negativo tomara el valor total de caracteres de la cadena, menos el valor en negativo que le pasemos, por ejemplo si nuestra cadena
         tiene un largo de 10 y le pasamos como parametros 0 y-2 tomara los primeros 8 caracteres de la cadena. si esta funcion no recibe un segundo parametro cortara hasta el final de la cadena

split() -> convierte una cadena en un array, separado por el caracter que le pasemos como parametro (si no le pasamos ningun parametro y le dejamos las comills simples separara la cadena por cada caracter)

join() -> convierte un array en una cadena separando las posiciones de un array usando  el caracter que le pasemso como parametro

reverse() -> recorre un array en forma inversa (de atras para adelante)

chartAt() -> toma un caracter de la cadena. para obtener el caracter se pasa como parametro el indice del caracter en la cadena partiendo desde cero.
              por ejemplo si de la cadena `hola` queremos obtener la letra l usamos chartAt(2)

*/
