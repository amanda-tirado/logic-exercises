/*

Enunciado:

Dada una cadena de texto, darle la vuelta e invertir el orden de sus carácteres, sin usar métodos propios del lenguaje, solo estructuras de control.

Pistas:

- Function w parameter 'text'
- Create a var/let to save the inverted string 
- Loop across the string and save new characters in a new let

*/

function invert( string ){
    let inverted = '';

    for (let character of string) {
        // console.log(character);
        // inverted += character;
        inverted = character + inverted;
    }

    return inverted;

};

console.log('Inverted Text', invert('hey'));