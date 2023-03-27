const fibonacci = function(arg) {
    const num = Number.parseFloat(arg);
    if (num < 1) return ('OOPS')
    return fib(num)

};

function fib(num) {
    if (num === 1) return 1
    if (num === 2) return 1
    return fib(num-1)+fib(num-2)
}
// Do not edit below this line
module.exports = fibonacci;
