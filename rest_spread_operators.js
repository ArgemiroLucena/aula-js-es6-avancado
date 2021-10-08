// Método antigo
function sum(a, b) {
    var value = 0;
    for (var i=0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
}
console.log(sum(5, 5, 5, 2, 3));

// Método atual no ES6 - Rest Operator ...
function soma(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(soma(5, 5, 5, 2, 3));

// Método antigo
const multiply = (...valores) => valores.reduce((acc, value) => acc * value, 1);
const somar = (...rest) => {
    return multiply.apply(undefined, rest);
};
console.log(somar(5, 5, 5, 2, 3));
// Método atual com ES6 - Spread Operator ...
const multiply2 = (...valores) => valores.reduce((acc, value) => acc * value, 1);
const soma2 = (...rest) => {
    return multiply2(...rest);
};
console.log(soma2(5, 5, 5, 2, 3));

// Rest Operator pode ser usado em Strings, Arrays, Objetos Literais e Objetos iteráveis
// Função de quebrar os itens e passar para outro lugar
// Exemplo 1
const srt = 'Digital Innovation One';
function logArgs(...args2) {
    console.log(args2);
}
logArgs(...srt);

// Exemplo 2
const arr = [1, 2, 3, 4];
function logArgs2(a, b, c) {
    console.log(a, b, c);
}
logArgs2(...arr);
// Exemplo 3 - Construir Arrays
const arr2 = arr.concat([5, 6, 7]);
console.log(arr2);

const arr3 = [...arr, 5 , 6, 7];
console.log(arr3);

// Exemplo 4 - Gerar Objetos
const obj = {
    test: 123
};
const obj2 = {
    ...obj,
    test2: 'hello'
};
console.log(obj2);

// Exemplo 5 - Clonar objeto sem alterar as propriedades do original
const objeto1 = {
    test: 123,
    subObj: {
        test: 123
    }
};

const objeto2 = { ...objeto1, subObj: { ...objeto1.subObj}};

objeto2.subObj.test = 456;
console.log(objeto1);