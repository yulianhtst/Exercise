function registry(input) {
    let cityes = {}
    input.forEach(x => {
        const [name, population] = x.split(' <-> ')

        // if (!cityes[name]) {
        //     cityes[name] = 0
        // }
        // cityes[name] += Number(population)


        !cityes[name] && (cityes[name] = 0);
        cityes[name] += Number(population);
        // const result = false && doSomething(); // `doSomething()` is not executed because the left operand is `false`
        // const result = true || doSomething(); // `doSomething()` is not executed because the left operand is `true`
        // const name = getUsername() || 'Guest'; // If `getUsername()` returns a truthy value, it is assigned to `name`; otherwise, `name` is set to 'Guest'


    })
    console.log(cityes);
}
registry(
    ['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000']
)