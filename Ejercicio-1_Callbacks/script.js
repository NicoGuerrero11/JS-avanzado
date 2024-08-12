/* 
    1-
    Muestra un mensaje en consola mediante un callback. La función 
    que escribas debe poder mostrar el mensaje 
    como console.warn, console.log, console.info, o cualquier método 
    para pintar en consola del objeto console.
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
    console.log(callback(num1, num2));   
}

function suma(num1,num2){
    return num1 + num2;
}
function resta(num1,num2){
    return num1 - num2;
}
function mult(num1,num2){
    return num1 * num2;
}
function div(num1,num2){
    return num1 / num2;
}

operacion(20,5,suma);
operacion(20,5,resta);
operacion(20,5,mult);
operacion(20,5,div);

/* 
    4.- Escribe una función que reciba una cadena de caracteres
     y debe devolver, mediante un callback, la cadena de caracteres en mayúsculas o en minúsculas.

*/
function cadena(str,callback){
   console.log(callback(str));
}

function mayus(str){
    return str.toUpperCase();
}

function minus(str){
    return str.toLowerCase();
}

cadena("hola mundo", mayus);
cadena("hola MUNDO", minus);

/* 
    5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos) EJEMPLO [120, 80, 200, 100]
    y tomar solo las cantidades mayores a dos horas (hacer la comparación en horas)
    regresar el nuevo array mediante un callback.

*/

let nuevo = [];
function newArr (arr){
    arr.forEach(index => {
        if(index > 120 ){
            nuevo.push(index);
        }
    });
    console.log(`el nuevo arr es: ${nuevo}`);
}

function nuevoArreglo (arr, callback){
    callback(arr);
}

nuevoArreglo([50, 200, 400, 12], newArr);

