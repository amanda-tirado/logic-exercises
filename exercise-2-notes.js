/*

Enunciado:

Dada una palabra, buscarla en una frase y devolver cuantas veces aparece.

La frase y la palabra deben ser parametros en una función

QUÉ, CÓMO Y CUANDO

QUÉ -> Quiero pasar una frase como parametro

*/

function wordFinder(phrase, search){
    //Primero, limpias la frase de caracteres especiales y la conviertes a minúsculas para hacer la búsqueda insensible a mayúsculas/minúsculas.
    let clean_text = phrase.toLowerCase().replace(/[¡!¿?',.;:]/gi, '');
    console.log(clean_text);
    let result = 0;
    // Verificas si la palabra de búsqueda (search) está presente en la frase limpia.
    if(clean_text.includes(search)){
        //Divides la frase limpia en un array de palabras. Conviertes la frase en un array de cada palabra
        let words = clean_text.split(' ');
        console.log('new array:', words);
        let map = {};
        //creamos un map (objeto:array) donde guardamos cada palabra como propiedad
        // for (let i = 0;  i < search.length; i++ ){
        //     let word = array[i];
        // }
        for (const word of words) {
            //for of consigue el valor de cada indice; for in consigue el indice de cada valor de array
            if(map[word]){
                map[word]++;
                //cada palabra se atribuye como propiedad a map y le damos un valor
            }else{
                map[word] = 1;
            }
        }
        console.log(words);
        console.log(map);
        result = map[search];
    // }else{return result;}
    }else{result = 0;}
    return result;
};

console.log('Nº of coincidence:', wordFinder('hey, its a word inside a phrase, word', 'word'));

// wordFinder('hey, its a word inside a phrase, word', 'word'); //return 2
console.log(wordFinder('i am no in the phrase', 'amanda')); //return 0