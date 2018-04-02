/*Continuando con el mismo ejemplo anterior
en esta ocacion lo realizaremos mediante ek uso de Async-Await */

function _handlerError(err){//creamos una funcion para manejar los errores
  console.log(err)
}

async function getLuke(){//declaramos una funcion asincrona usando la palabra reservada async
  try{//usamos un try catch para ejecutar este boque de codigo, y si hay un error lo capturamos en el catch

    const response = await fetch(`https://swapi.co/api/people/1`)//guardamos la promesa realizada con el metodo
//fetch en una constante llamada response, pero como esta es una promesa usamos el metodo await para esperar a que
//esta promesa se resuelva antes de guardar su valor en la constante
    const luke = await response.json()//asignamos el valor obtenido de la promesa a la constante luke, y como el valor
//obtenido es una promesaigualmente usamos await para esperar que esta se resuelva antes de asignar el valor
    const responseHomeworld = await fetch(luke.homeworld)//nuevamente guardamos la proeza realizada con fetch en una constante
//y usamos awais para esperar que esta se resuelva antes de guardar su valor
    luke.homeworld = await responseHomeworld.json()//guardamos el valor retornado en la propiedad homeworld,
//y usamos await para esperar que la promesa se resuelva
    console.log(`${luke.name} vive en  ${luke.homeworld.name}`)
//imprimimos por consola la propiedad nombre del objeto luke, y la propiedad nombre del objeto homeworld guardado en la propiedad
//homeworld del objeto luke
} catch(err){//atrapamos los errores que ocurran durante la ejecucuiion
    _handlerError(err)//llamamos a la funcion _handlerError y le pasamos los errores
  }
}

getLuke()
//llamamos a la funcion getLuke


/*
async -> define una funcion como asincrona
await -> traba el flujo de ejecucion hasta que se resuelve la promesa
*/
