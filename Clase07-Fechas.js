/*Uso de fechas en Javascript
Para este ejemplo calcularemos cuanto tiempo paso desde nuestra fecha de nacimiento, y que dia cae nuestro cumpleaños
*/

const nacimiento = new Date(1993,0,7)
//asignamos a la constante nacimeiento el valor del objeto date con nuestra fecha de nacimiento
const hoy = new Date()
//asignamos a la constante hoy el valor del objeto date con la fecha actual
let tiempo = hoy - nacimiento
//obtenemos la diferencia en milisegundos  entre la fecha actual y nuestra fecha de nacimeinto

let tiempoSegundos = tiempo / 1000
//para obtener el tiempo transcurrido en segundos basta con dividir la variable tiempo por 1000, ya que en cada segundo hay 1000 milisegundos

let tiempoMinutos = tiempoSegundos / 60
//para obtener el tiempo transcurrido en Minutos basta con dividir la variable tiempoSegundos por 60, ya que en cada minuto hay 60 segundos

let tiempoHoras = tiempoMinutos / 60
//para obtener el tiempo transcurrido en horas basta con dividir la variable tiempoMinutos por 60, ya que en cada hora hay 60 minutos

let tiempoDias = tiempoHoras / 24
//para obtener el tiempo transcurrido en dias basta con dividir la variable tiempoHoras por 24, ya que en cada dia hay 24 horas

//de esta forma podemos ir calculando cuanto tiempo ha pasado desde nuestra nacimiento

//como segundo ejemplo veremos que dia cae nuestro cumpleaños este añoptimize

const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
//creamos un nuevo objeto de tipo date y le pasamos como parametro el año del objeto hoy, el mes y el dia del objeto nacimeinto


const diasSemana = [//creamos un array con las tradcucciones de la semana
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
]

const meses = [//creamos un array con los meses
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
]
 const proximo = `Tu cumpleaños este año es el ${diasSemana[proximoCumple.getDay()]} ${proximoCumple.getDate()} de ${meses[proximoCumple.getMonth()]}`
/*Instanciando un objeto de tipo Date en Javascript
=> const nacimiento = new Date(año, mes -1, dia)

-> el objeto date recive como parametro una fecha en formato año mes dia, pero el mes en particular resive el valor del numero correspondiente al mes -1
  ya que los meses estan almacenados en un array, que comienza con el indice 0. por ejemplo si queremos referirnos a enero usariamos el 0 y asi sucesivamente

-> en el caso de no pasarle parametros al objeto date, javascript lo interpreta como la fecha actual

=> var const proximoCumple = Date(hoy.getFullYear(), nacimeinto.getMonth(), nacimeiento.getDate())
-> para calcular el proximo cumpleaños instanciamos un nuevo objeto de tipo date, y como parametro le pasamos la fecha de nuesto compleaños.
  en el año usamos el objeto hoy (este objeto lo instanciamos anteriormente para calacular la fecha actual) y usamos el metodo getFullYear() que nos retorna el año del objeto hoy
  en el mes usamos el objeto nacimiento( este objeto lo instanciamos anteriormente con nuestra fecha de nacimeinto) y usamos el metodogetMonth() que nos retorna el mes del objeto nacimiento
  finalmnette usamos el objeto nacimeinto nuevamente y usamos el metodo getDate() para obtener el dia del objeto nacimiento

Para invocar un metodo de un objeto lo hacemos con `.` poniendo en primera instancia el objeto, luego el punto y finalmente el metodo al cual deseams acceder ( objeto.metodo() )

Para traducir las fechas a español creamos dos arrays, uno con las traducciones de los dias partiendo por el domingo, y uno con las traducciones de los meses
*/
