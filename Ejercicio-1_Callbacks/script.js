/* 
    1-
    Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje 
    como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.
*/

function saludar(nombre){
    console.log(`mucho gusto ${nombre}`);
}

function mensaje(callback){
    let nombre = "nicolas";
    callback(nombre);
}

mensaje(saludar); 

/* 
2.- Crear una función que reciba como argumento una variable de cualquier tipo y un callback.
 La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable 
 ingresada e imprimir su contenido. typeof
*/
function tipo(variable){
console.log(typeof variable);
}

function llamada(variable, callback){
    callback(variable);
}

llamada(10, tipo);

/* 
    3.- Crear una función que reciba como argumentos, dos números y un callback. 
    Según el callback que se pase a la función, se devuelve la suma de los dos números, 
    la resta de los dos números, la multiplicación de los dos números o división.

*/

function operacion(num1,num2,callback){
    
}