function argsInfo(...args) {
    let types = {}

    Array.from(args).forEach(x => {
        console.log(`${typeof x}: ${x}`)
        if (!types.hasOwnProperty(typeof x)) {
            types[typeof x] = 0
        }
        types[typeof x]++
    })

    for (const [key, value] of Object.entries(types)) {
        console.log(`${key} = ${value}`);
    }
}
argsInfo('cat',{}, 'cat', 'cat', 'cat', 42, 'cat', 42, 42, function () { console.log('Hello world!'); })