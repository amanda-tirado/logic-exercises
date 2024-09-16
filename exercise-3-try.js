/*

Enunciado:

Dada una cadena de texto, darle la vuelta e invertir el orden de sus carácteres, sin usar métodos propios del lenguaje, solo estructuras de control.

*/

function invert( info ){
    for (let i = 0; i < info.length; i++) {
        let letter = info[i];
        // console.log(letter);
    }
    let inverted_info = info[2] + info[1] + info[0];
    console.log(inverted_info);
};

invert('hey');