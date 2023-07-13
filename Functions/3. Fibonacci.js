function getFibonator() {
    let firstNumber = 0
    let secondNumber = 1

    return () => {
        let result = firstNumber + secondNumber
        firstNumber = secondNumber
        secondNumber = result
        return result
    }
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());