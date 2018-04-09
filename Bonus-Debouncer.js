/*Debouncer nos permite establecer un tiempo  entre llamadas a una funcion
por ejemplo establecer que una funcion solo pueda ser llamada solo x tiempo despues de su ultima llamada


esto resulta util por ejemplo cuando realizamos una peticion asincrona al servidor gatillado por un evento
de teclado

en el ejemplo veremos como implementar debouncer en un evento de raton, el cual solo nos permitira realizar
un segundo llamado a la funcion solo despues de medio segundo  segundo desde su ultima ejecucion, ya que por cada
nuevo llamado a la funcion antes de cumplirse el setTimeout establecido este es eliminado y comienza un nuevo setTimeout
*/

function displayCoords(event){//creamos una funcion para mostrar las coordenadas del mouse en pantalla
document.body.textContent = 'Mouse at' + event.pageX + ' , ' + event.pageY
//recivimos el objeto evento enviado desde el llamado a la funcion gatillado por el evento mousemove
console.log('fired')
//imprimimos en consla para ver los resultados
}


var debouncerTime//establecemos una variable llamada debounceTime

addEventListener('mousemove', function(event){
//ejecutamos una funcion anonima cuando detectemos el movimiento del mouse
lastEvent = event
//asignamos el valor del evento obtenido de la funcion a la variable lastEvent

clearTimeout(debouncerTime)
//eliminamos el timeout de debouncerTime
debouncerTime = setTimeout(function(){
  //establecemos un nuevo setTimeout en la variable debounceTime
	displayCoords(lastEvent)//cuando se cumpla la espera realizamos el llamado a la funcion

}, 500)


})


/*Que esta pasando
si llamas a tu función una sola vez se ejecutará normalmente segun el timeout

si llamas a tu función dos veces seguidas en menos del tiempo establecido
la primera prepara el timeout
la segunda cancela el timeout y prepara uno nuevo por tanto, solo se ejecutará la segunda llamada

con esto evitamos realizar llamados inecesarios a una funcion

*/
