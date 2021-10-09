/*
// Symbols - Identificador único

const uniqueId = Symbol('Hello');
const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);

// Well Known Symbols
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4]
const str = 'Digital Innovation One';

const it = arr[Symbol.iterator]();

while (true) {
    let { value, done } = it.next()
    if (done) {
        break;
    }
    console.log(value);
}
// Novo método ES6
for (let value of arr){
    console.log(value);
}
for (let valor of str){
    console.log(valor);
}*/

// Iteradores 
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

const it = obj[Symbol.iterator]()

for (let value of obj) {
    console.log(value);
}

const arr2 = [...obj];
console.log(arr2);
