/*Realizando un callback a un servidor externo
Para este ejemplo nos conectaremos a una apinque nos retorna todos los datos de  Star Wars

*/

function get(URL,callback){ //creamos una funcion de llamada get la con la cual estableceremos la conexion con el api
//esta funcion recive 2 parametros, la url del api, y una funcion callback a ejecutar
  const xhr = new XMLHttpRequest();
//definimos una constante llamada xhr igual al objeto XMLHttpRequest
  xhr.onreadystatechange =  function(){
    //usamos la function onreadystatechange para detectar cambios en la cabecera de nuestra peticion
    const DONE = 4//definimos la constante done con el valor 4
    const OK = 200//definimos la constante ok con el valor 200
    if(this.readyState == DONE){//si la funcion readyState nos retorna un valor igual a done, pasamos a ver el status
      if(this.status == OK){//si la peticion a la api fue correcta,esta nos retornara 200
        callback(null, JSON.parse(xhr.responseText))//ejecutamos la funcion callback, la cual sera enviada como parametro
        //transformamos la respuesta del servidor a formato json
      }else {
        callback(new Error(`Se produjo un error al realizar el request ${xhr.status}`))
        //por el contrario si la conexion falla retornamos el error
      }
    }
  }
xhr.open('GET',URL)//llamamos al metodo open para abrir la peticion
xhr.send(null)//usamos el metodo send para enviar la peticion, como la peticion sera get, no enviamos argumentos
}


function _handlerError(err){//creamos una funcion llamada _handlerError para capturar los errores
  console.log(`Request Failed ${err}`)
}


get(`https://swapi.co/api/people/1`, function onResponse(err,luke){
  //realizamos el llamado al metodo get, al cual le pasamoa la url, y la funcion que se ejecutara en el callback, la cual
  //recive 2 parametros, err para manejar el error , y luke, que contiene el resultado de la respuesta
  if(err) return _handlerError()//preguntamos con un if si hay errores, y si los hay retornamos la funcion _handlerError
/*En este punto ya podriamos acceder a el opbjeto luke, y sus propiedades, pero aun nos queda acceder al planeta de lucke
por lo que realizamos otra llamada a la funcion get*/
  get(luke.homeworld, function(err, homeworld){
/*en este llamado a la funcion get le pasamos como url el valor del objeto luke, en su propiedad homeworld
, y una funcion para ejeecutarse en el callback*/
      if(err) return _handlerError()//si hay errores ejecutamos la funcion _handlerError

      luke.homeworld = homeworld
//asignamos a la pripiedad homeworld del objeto lucke e objeto homeworld obtenido de la segunda llamada a la funcion callback

      console.log(`${luke.name} nacio en el planeta ${luke.homeworld.name}`)
  //hacemos console log accediendo a la propiedad name del objeto lucke, y a la propiedad homeworld.name del objeto luke
  })


  // console.log(`Request Success`)
  // console.log(`luke`, luke)
})



/*Como vemos para acceder a otras propiedades encadenamos callbacks.
esto es conocido como callback hell y es algo que debemos evitar. Para evitar esto en la proxma clase veremos promesas*/
