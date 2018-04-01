/*Promesas en javascript
estaremos realizando el mismo ejemplo que en la clase anterior con callbacks
Pero en esta ocacion lo haremos con promesas

*/
function get(URL){//creamos la funcion get para la conexion httpRequest
  return new Promise((resolve, reject)=> {//retornamos una nueva promesa con la logica para la conexion
    const xhr = new XMLHttpRequest();//asignamos una constante xhr como un nuevo objeto XMLHttpRequest

    xhr.onreadystatechange = function (){//usamos el metodo onreadystatechange para ver un cambio en la cabecera de la peticion
      const DONE = 4//asignamos la connstante done como 4
      const OK = 200//asignamos la constante ok como 200
      if (this.readyState == DONE) {//preuntamos si readyState de el objeto xhr es igual a done
        if (this.status == OK) {//preguntamos si status del objeto xhr es igual a ok
          resolve(JSON.parse(this.responseText))//si la conexion se realizo correctamente retornamos el resolve con la informacion
        }else{//si ocurrio un error con la conexion retornamos el reject con el error
          reject( new Error(`Se produjo un error al realizae el request ${this.status}`))
        }
      }
    }
    xhr.open('GET', URL)//abrimos la conexion
    xhr.send(null)//enviamos la peticion
  })
}

function _handlerError(err){//creamos una funcion para capturar los errores
  console.log(`Request Failed ${err}`)
}

let luke//creamos una variable local llamada luke para usarla dentro del scope de la promesa
get(`https://swapi.co/api/people/1`)//llamamos a la funcion get le pasamos como parametro la url
//, y accedemos al metodo then si la respuesta fue exitosa
.then((response)=>{
  luke = response//asignamos el valor de ressponse a luke (response trae el valor obtenida del request realizado)
  return get(luke.homeworld)
  //retornamos otra promesa llamando al metodo get y pasando como url el valor de luke.homeworld
})//cuando en una promesa retornamos otra promesa podemos acceder nuevamente al metodo then. en esta ocacion es el metodo the
//de la segunda promesa, la cual nos retorna el valor obtenido de la peticion realizada al planeta donde vive luck
.then((homeworld)=>{
  luke.homeworld = homeworld
//cambiamos el valor del atributo homeworld del objeto luck, de una url a el objeto homeworld
  console.log(`${luke.name} viene del planeta ${luke.homeworld.name}`)
//imprimimos en consola el nombre de luck y el planeta en el cual vive
})
.catch(err => _handlerError(err))
//en caso de haber un error en la peticion este es atrapado por el catch, el cual nos retorna la funcion _handlerError
//esto sin pasar antes por los then.


/*Las promesas reciven dos parametros en su construccion

1 resolve  es lo que se ejecutara cuando la promesa reciva una respuesta exitosa
2 reject es lo que se ejecutara cuandon la respuesta no sea exitosa

Al igual que los  parametros las promesas tienen 3 estados

1 pending cuando aun estan pendientes de respuesta
2 resolve cuando la respuesta es exitosa
3 reject cuando la respuesta es erronea


====================FETCH EN LUGAR DE GET ===================
fetch establece la conexion por nosotros, po lo cual a diferencia del ejemplo anterior no necesitamos
crear un metodo get para manejar la conexion
*/

function _handlerError(err){//creamos una funcion para capturar los errores
  console.log(`Request Failed ${err}`)
}

let luke//creamos una variable local llamada luke para usarla dentro del scope de la promesa
fetch(`https://swapi.co/api/people/1`)//realizamos un llamado de tipo fetch a la url, y este nos retorna un Response
.then(response => response.json())
//el response  que nos retorna el fetch tiene un metodo json, con lo cual nos retorna otra promesa para encadenar
.then((json) => {
  //esta promesa es retornada por el fetch, y recive el valor de la respuesta en formato json
  luke = json //asignamos el valor  que retornno la promesa a la variable luke
    return fetch(luke.homeworld)//retornamos otro llamado fetch con la url de luke.homeworld
})
.then( response => response.json())
//el segundo fecth buevamente nos retorna un objeto resonde el cual retornamos en formato json para una seguna promesa
.then((json)=>{//recivimos el objeto responde con el valor de la promesa
  luke.homeworld = json//cambiamos el valor de la propiedad homeworld de una url a un objeto con la informacion obtenida de la promesas
  console.log(`${luke.name} viene del planeta ${luke.homeworld.name}`)
  //accedemos al objeto lucke he imprimimos su nombre y la propiedad name del objeto homeworld que esta como atributo en el objeto luke
})
.catch(err => _handlerError(err))
//en caso de haber un error en la peticion este es atrapado por el catch, el cual nos retorna la funcion _handlerError
//esto sin pasar antes por los then.
