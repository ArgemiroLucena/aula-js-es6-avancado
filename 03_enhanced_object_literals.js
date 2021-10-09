var prop1 = 'Digital Innovation One'

//var obj = {
//    prop1: prop1
//};
//
//Com o ES6 pode omitir a palavra duplicada. Também funciona com funçções.
var obj = {
    prop1
};

//var obj = {
//    prop1: 'Digital innovation One'
//};
console.log(obj);

// Exemplo 1
var obj2 = {
    sum: function sum(a, b) {
        return a + b;
    }
};
console.log(obj2.sum(1, 5));

// Exemplo 2
var obj3 = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj3.sum(2, 3));

// Forma Antiga
var propName = 'test';
var obj4 = {};
obj4[propName  + 'concat'] = 'prop value';
console.log(obj4);

// Forma Atual com ES6
var propName = 'test';
var obj5 = {
    [propName + 'concat']: 'prop value'
};

console.log(obj5);
