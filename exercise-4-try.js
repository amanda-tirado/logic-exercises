/*

Enunciado:

- Dibujar un cuadrado hueco con asteriscos

    ****
    *  *
    *  *
    ****

- Como hacerlo:
    2 funciones: 1 para construir los lados horizontales con el hueco y otra para contruir los lados verticales
    Bucle del 0 al tamaño de los lados menos 2 para equilibrar con el lado de arriba y abajo
    Bucle para pintar los espacios, menos dos para equilibrar con el asterisco de izq. y derc.
    Ir concatenando en una variable cada línea del cuadrado.
    Mostrar el cuadrado en la función principal
*/

// Función para construir las líneas horizontales (superior e inferior)
function horizontal(number) {
    let string = '';

    // Genera una fila de asteriscos del tamaño dado
    for (let i = 0; i < number; i++) {
        string += '*'; //string = string + '*';
    }

    return string;
}

// Función para construir las líneas verticales (laterales con hueco en el medio)
function vertical(number) {
    let string = '*';

    // Rellena los espacios vacíos en el medio de la fila (para el hueco)
    for (let i = 1; i < number - 1; i++) {
        string += ' ';
    }

    string += '*'; // Cierra la línea con otro asterisco -> string = string + '*';
    return string;
}

// Función principal para dibujar el cuadrado
function square(number) {
    let result = '';

    // Genera la primera línea (superior)
    result += horizontal(number) + '\n'

    // Genera las líneas del medio (verticales)
    for (let i = 1; i < number - 1; i++) {
        result += vertical(number) + '\n';
    }

    // Genera la última línea (inferior)
    result += horizontal(number);

    return result;
}

// Mostrar el cuadrado
console.log(square(4));
