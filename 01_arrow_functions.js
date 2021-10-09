// Escrita antiga
var sumOld = function(a, b){
    return a + b;
};
// Arrow functions
// Expressão única (returno implícito)
// Se for definir variáveis, funções, consicionais, etc as chaves {} são obrigatórias
var sum = (a, b) => a + b;
console.log(sum(5, 15));
// Se tiver penas um argumento pode ocultar os parênteses
// Exemplo var sum2 = a => a;
var createObj = () => ({ test: 123});
console.log(createObj());
// Gerar objeto a partir de uma função construtora
// Não é possível com Arrow Function (this)
function Car() {
    this.foo = 'bar';
}
console.log(new Car());
// Hoisting não funciona com Arrow Functions
//log('teste');
//var log = value => {
//    console.log(value);
//};