function argsInfo() {
    let count = {}
    Array.from(arguments)
    .forEach(x => {
            let type = typeof x;

            if(!count[type]){
                count[type] = 0 ;
            }
            count[type]++;



            console.log(`${typeof (x)}: ${x}`);
        })
        console.log(count);
}
argsInfo('cat', 42 ,function () { console.log('Hello world!'); })
// function foo(...args) {
//     const count = {}
//     const result = args.map(x => {
//         count[typeof x] = (count[typeof x] || 0) + 1
//         return `${typeof x}: ${x}`
//     })

//     result.forEach(x => console.log(x))
//     Object.entries(count).sort((x,y) => y[1] - x[1]).map(([type, counts]) =>
//         console.log(`${type} = ${counts}`)
//     )
// }