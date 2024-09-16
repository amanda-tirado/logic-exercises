// Métodos JS:

/*
.split(' ');
    En JavaScript, el método .split(' ') se utiliza para dividir una cadena de texto en un array de subcadenas, utilizando el carácter o el patrón proporcionado como delimitador. En este caso, el delimitador es un espacio en blanco (' ').
*/

const texto = "Hola mundo cómo estás";
const palabras = texto.split(' ');
console.log(palabras);
/*
Este código dividirá la cadena texto en un array de palabras, separadas por los espacios. El resultado será:
    ["Hola", "mundo", "cómo", "estás"]
Cada palabra de la cadena original se convierte en un elemento del array palabras.
*/

/*
.includes()
El método .includes() se usa para determinar si un array o una cadena de texto contiene un elemento o una subcadena específica.
*/
// Para Arrays:
const frutas = ['manzana', 'banana', 'naranja'];
console.log(frutas.includes('banana')); // true
console.log(frutas.includes('uva')); // false

// Para Cadenas de Texto:
const texto_2 = 'Hola mundo';
console.log(texto_2.includes('mundo')); // true
console.log(texto_2.includes('Hola')); // true
console.log(texto_2.includes('mundo!')); // false

/*
for...of
El bucle for...of se utiliza para iterar sobre elementos de colecciones iterables como arrays, cadenas, mapas, conjuntos, etc.
*/
const numeros = [1, 2, 3, 4, 5];

for (const numero of numeros) {
  console.log(numero);
}
/*
Este código imprime cada número en el array numeros. Es útil cuando necesitas trabajar con los valores directamente.
*/

/*
for...in
El bucle for...in se utiliza para iterar sobre las propiedades enumerables de un objeto (incluidas las propiedades heredadas).
*/
const persona = { nombre: 'Ana', edad: 30, ciudad: 'Madrid' };

for (const clave in persona) {
  console.log(clave + ': ' + persona[clave]);
}
/*
Este código imprime cada propiedad y su valor en el objeto persona. Es útil para trabajar con las claves y valores de objetos, pero no se recomienda para arrays si deseas trabajar con los valores directamente.
*/
