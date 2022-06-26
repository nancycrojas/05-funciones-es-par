//Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es

//TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

//esPar(2) // true
//esPar(3) // false

const esPar = (num) => {
//function esPar (num) {
    return num % 2 === 0;
}

esPar(2);
esPar(3);

