/*
function multiply(a, b) {
    // Corrigir o undefined mas gera problema em multiplicação por 0
    //b = b || 1;
    //console.log(multiply(5));
    // Alternativas para corrigir
    //b = typeof b === 'undefined' ? 1 : b;
    if (typeof b === 'undefined') {
        b = 1;
    }
    return a * b;
}
*/
/*
// Com ES6 (pode refenreciar outros paramentros. Ex. (a, b = a)
// Referenciar na ordem que aparece o parametro
function multiply(a, b = 1){
    return a * b;
}
console.log(multiply(5, 0));
*/

// Lazy Evaluation
function randomNumber() {
    console.log('Generating a random number...');
    return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
    return a * b;
}
console.log(multiply(5));
console.log(multiply(5));