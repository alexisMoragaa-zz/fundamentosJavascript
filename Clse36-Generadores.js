/*Los generadores en javascript nos permiten crear un punto de quiebre
en el cual nustra funcion se detendra, yen la siguiente llamada se ejecutara desde
la linea en la que se detuvo */

function* fibonacci(){
  //usamos el * para definir que esta funcion es un generador
  let a= 0, b = 1//asignamos los valores iniciales para fibonacci

  while(true){//creamos un while infinito
    let f = a//asignamos  a f  el valor de a
    a = b//asignamos a a el valor de b
    b = f + a//asignamos a b el valor de f + a
    let reset =yield f//usamos yield como punto de quiebre, esto obliga a la funcion a retornar f
    //establecemos una variable para resetear el clousure y le asignamos el valor de yield
    if (reset) a = 0, b= 1
  }
}

 const fibo = fibonacci()//llamamos a la funcion, que al ser un generador es enrrealidad un objeto
fibo.next().value//accedenos a la funcion next del objeto generador y a su propiedad value que nos
//retorna el valor entregado por yield
//si llamamos nuevamente a la funcion esta se comenzara a ajecutar justo despues de yield, con lo cual
//recordando su clousure entrara nuevamente al while y nos retornara yield, deteniendo nuevamente el while
//hasta la proxima llamda

fibo.next(true)
//yield puede resivir un parametro, el cual es asignamo a la variable reset, con lo cual, si reset es true
//entramos al if y reseteamos los valores a los iniciales
/*
Con los generadores pasa algo similar a el metodo async await

usamos * para declarar una funcion e tipo generador , y esto nos da acceso a la palabra
reservada yield, la cual nos permite crear un punto de quiebre como un return.
pero adicionalmente a esto nos permite continuar la ejecucion desde ese punto esacto la proxima vez que llamemos
a la funcion, ademas la funcion recordara el clousure

este objeto tiene las mismas propiedades que los iteradores que vimos en la clase anterior ,
con lo cual accederemos a la funcion que esta en la propiedad dext, y a su propiedad value
*/
