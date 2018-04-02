/*Vimos como ejecutar funciones asincronas usando un setTimeout. y vimos como repetir una funcion cada
x cantidad de tiempo con setInterval. Ahora veremos como cancelar estos*/


const timer = setTimeout(()=>alert(`Han pasado 5 segundos`),5000)
//guardamos el setTimeout en una constante llamada timer
clearTimeout(timer)
//usamos el metodo clearTimeout para cancelar el setTimeOut. este recive como parametro el setTimeOut que deseamos
//cancelar, en este caso timer

segundos = 0
const interval = setInterval(()=>{
  //guardamos el setInterval en una constante
  segundos++
  document.write( segundos <= 1 ? `ha pasado ${segundos} segundo <br>` : `han pasado ${segundos} segundos <br>`)

  if(segundos == 5){//preguntamos si segundos es igual a 5
    document.write(`el conteo llego a 5. es tiempo de detenerlo`)
    //imprimimos un mensaje
    clearInterval(interval)
    //detenemos el intervalo
  }
},1000)
