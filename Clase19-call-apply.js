/*CALL Y APPLY 
Estas funciones nos permiten enviar el contexto a una funcion y ejecutar la misma
*/
const alexis = {
  nombre:"alexis",
  apellido:"moraga"
}

function saludar(veces){
  //declaramos una funcion llamada saludar, la cual recive como parametro las veces que se realixara el saludo

  for (let i = 0; i < veces ; i++) {
    console.log(`Hola ${this.nombre} ${this.apellido}`)
//en este contexto this esta apuntando al objeto global, y como el objeto global no tiene las propiedades
//nombre y apellido retorna undefidned, por lo cual debemos pasarle el contexto al this en la llamada a la funcion
  }
}


saludar(3);
//si llamamos a la funcion de esta forma esta nos retoenara hola undefidned undefidned 3 veces, ya que no le estamos pasando el contexto

saludar.bind(alexis,3)
//si la le pasamos el contexto con bind este nos retornara la funcion, ya que si bien le envia el contexto, este no ejeuta la funcion

saludar.call(alexis,3)
//para solucionar esto usamos call, lo cual le envia el contexto, y ademas ejecuta la funcion

saludar.apply(alexis,[3])
//Igualmente podemos usar la funcion apply, que funciona igual a call, con la diferencia que los parametros son enviados mediante un array

/*Funciones
-> call() esta funcion nos permite darle contexto al objeto this, y ademas nos permite realizar el llamadoa una funcion
          esta funcion recive como primer parametroe el contexto o valor del this,
           y como parametros adicionales los parametros que necesita la funcion llamada para funcionar

->apply() funciona igual que call, pero recive como primer parametro el contexto, y como segundo parametro un array con los parametros para la funcion



*/
