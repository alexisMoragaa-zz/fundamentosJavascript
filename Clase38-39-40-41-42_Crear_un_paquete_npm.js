/*Creando un paqurete en npm

Durante la creacion de nuestro paquete npm reautilizaremos el codigo creado en las primeras clases
en las que creamos un idioma nuevo.
Que es npm?

npm o node package mager es un gestor de paquetes en el cual esncontraremos un sin fin de frameworks
y librerias que nos ayudaran a realizar tareas espesificas. la mayoria de estos paquetes son open source
por lo cual podemos ver su codigo de forma abierta para estudiarlos y comprenderlos de mejor forma

==================================================================================================
=============================== Clase 38 Requisitos Tecnicos =====================================
=================================================================================================

1. Necesitamos tener o crear una cuenta en el sitio oficial de npm
2. tener instalado nodejs, ya que esto nos permite tener instalado npm
3. Tener instalado git y github para almacenar el codigo de nuestro paquete

=> bien, desde la terminal usamos los comandos:

npm set init.author.name "aca tu nombre"
npm set init.author.email "aca tu email"
npm set init.author.url "aca tu sitio(puedes añadir la url que quieras, facebook, twitter...)"

con estos comandos configuramos el entorno de npm de forma global para que recuerde quien crea el paquete

luego usamos el comando
npm login

seguido de esto nos pedira username, passwor y email de la cuenta npm que creamos anteriormente

ingresados los datos correctamente estaremos logeados en npm desde la terminal y podemos comenzar a crear nuestro paquete

creamos un repositorio en GitHub para almacener al codigo de nuestro paquete

======================================================================================================
================================ Clase 39 Creando Nuestro Paquete ======================================
======================================================================================================

desde la consola nos dirigimos a la carpeta en donde crearemos nuestro paquete npm y ejecutamos el comando
npm init

luego nos pedira ingresar
-> el nombre de nuestr paquete (si no ingresamos nada tomara el nombre de la carpeta que lo contiene)
-> la version de nuestro paquete
-> una descripcion del mismo
-> un entry point, o archivo principal de nuestro paquete (por defexto esta index.js)
-> test comand, si tienes test de prueba en tu paquete aca introduces el comando para realizarlos
-> git Repository, el repositorio de github en el cual estara alojado el codigo de nuestro paquete
-> keywords, añadir palabras claves para encontrar el repositorio
->license añadir la licencia del codigo (una licencia recomendada para el codigo open source es MIT)

terminado esto damos enter y en la carpeta de nuestro paquete tendremos un archivo llamado package.json
con los datos ingresados anteriormenete

Para establecer la version de tu proyecto es importante tener en cuenta lo siguiente
las versiones se miden en un numero con entero con dos decimales ej : 1.0.0

-> el ultimo numero lo reservamos para la correcion de bugs
-> el numero intermedio lo reservamos para la creacion de nuevos features
-> el numero entero esta reservado para los cambios importantes en tu paquete. es decir, cada vez que
    tu paquete cambia parte de su funcionamiento, cuando por ejemplo cambias los llamados  a funciones
    o cuando cambia la forma en que usar el paquete

=> terminado esto añadimos dos archivos a nuestro paquete
-> el archivo con la licencia
->el archivo README.


*/
