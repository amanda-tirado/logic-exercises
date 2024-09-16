/*
Dada una cadena de texto, comprobar si es un palindromo o no.
* Los palindromos (palindrome EN)son palabras que se leen igual estando invertidas. 
Por ejemplo: ana, bob, otto, allivesevilla...

* No tener en cuenta espacios o simbolos raros.

- Ejecuto esta función:
palindrome('otto'); //Devuelve true
palindrome('victor');; //Devuelve false

Cómo hacerlo:
- Función con parámetro 'text';
- Separar texto en un array de letras
- Le damos la vuelta a ese array
- Y lo comparamos con el original
*/ 


function palindrome(text){
    let inverted = text.split('').reverse();
    let inverted_array = inverted.join();
    //La función split() en JavaScript divide una cadena de texto en un array de subcadenas basándose en un delimitador (carácter o patrón). Si se pasa un argumento al método, este especifica dónde dividir la cadena. Es decir, separa un texto o una cadena en un array de carcateres (letras)
    console.log(inverted);
    //reverted invierte el orden de los elementos de un array
    // if(inverted == text){ compara los valores sin entrar a comprar el tipo de dato

    // if(inverted === text){
    //     return true;
    // }else{
    //     return false;
    // }
    
    // Comparar la cadena original con la invertida
    return inverted_array === text;
};

// palindrome('otto'); //Devuelve true
console.log('Is it a palidrome? ' , palindrome('otto'));
console.log(palindrome('victor')); //Devuelve false