/*

Enunciado:

Dada una cadena de texto, darle la vuelta e invertir el orden de sus carácteres, sin usar métodos propios del lenguaje, solo estructuras de control.

Pistas:

- Function w parameter 'text'
- Create a var/let to save the inverted string 
- Loop across the string and save new characters in a new let

*/

//Con estrcutura de control

function invert( string ){
    let inverted_string = '';

    for (let i = string.length - 1; i >= 0; i--) { // Comienza desde el último índice
        let letter = string[i];
        // console.log(letter);
        inverted_string += letter;  // Concatenar cada letra en orden inverso
    }

    return inverted_string; // Devolver la cadena invertida

};

// console.log(invert('hey'));

//Sin condicion de hacerlo con estructura de control; mucho + rápido

function inverting( string ){
    let invertedString = string.split('').reverse().join();
    // console.log(invertedString);
    return invertedString;
};

console.log('Other way to invert text', inverting('Hola que tal?') );