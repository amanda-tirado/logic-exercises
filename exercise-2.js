/*

Enunciado:

Dada una palabra, buscarla en una frase y devolver cuantas veces aparece.

La frase y la palabra deben ser parametros en una función

QUÉ, CÓMO Y CUANDO

QUÉ -> Quiero pasar una frase como parametro

*/

function wordFinder(phrase, search){
    //covert string to min  
    let clean_text = phrase.toLowerCase().replace(/[¡!¿?',.;:]/gi, '');
    console.log(clean_text);
    let result = 0;
    if(clean_text.includes(search)){
        let words = clean_text.split(' ');
        console.log(words);
        let map = {};
        // for (let i = 0;  i < search.length; i++ ){
        //     let word = array[i];
        // }
        //for of consigue el valor de cada indice; for in consigue el indice de cada valor de array
        for (const word of words) {
            if(map[word]){
                map[word]++;
            }else{
                map[word] = 1;
            }
        }
        console.log(words);
        console.log(map);
    // }else{return result;}
    }else{result = 0;}
    return result;
};

wordFinder('hey, its a word inside a phrase, word', 'word'); //return 2
wordFinder('i am the phrase', 'amanda'); //return 0