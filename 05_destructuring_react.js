// Método Antigo

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Destructuring no ES6
// Se atentar para que existam os index
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(apple, apple2);
console.log(tomato, tomato2);

// Método antigo - Em objetos
var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favotireColors: ['black', 'blue']
    }
}
var name = obj.name;
var age = obj.props.age;
var color = obj.props.favotireColors[0];

// Destructuring em objetos ES6
var { name: name2 } = obj;
var { props: { age: age2, favotireColors: [color1, color2] } } = obj;

console.log(name, name2, age, age2, color, color1, color2);

// Exemplo

var arrr = [{ nome: 'Apple', type: 'fruit'}];
var fruit1 = arrr[0].nome;
var [{ nome: fruit2 }] = arrr;

console.log(fruit1, fruit2);

// Funções com Destructuring

function soma(arr) {
    return arr[0]+arr[1]
}

function sum([a, b] = [0, 0]) {
    return a + b
}

function somar({ a, b }) {
    return a + b;
}

console.log(soma([5,5]));
console.log(sum([5,6]));
console.log(somar({ a: 5, b: 7}));

