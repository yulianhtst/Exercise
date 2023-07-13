function getFibonator() {
    // let a=0;
    // let b=1;

    let [a, b] = [0, 1];  //Така може да се запишат променливите

    //Clousure
    return () => {
        let c = a + b;
        a = b;
        b = c;
        return a;
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