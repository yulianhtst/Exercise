function solution() {
    let storage = {
        apple: createElement(0, 1, 0, 2),
        lemonade: createElement(0, 10, 0, 20),
        burger: createElement(5, 0, 1, 3),
        eggs: createElement(5, 0, 1, 1),
        turkey: createElement(10, 10, 10, 10),
    }

    function createElement(protein, carbohydrate, fat, flavours) {
        return {
            protein,
            carbohydrate,
            fat,
            flavours,
        }
    }
    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavours: 0,
    }

    function restock(el, quantity) {
        microelements[el] += quantity
    }
    function report() {
        let storageRep = Object.entries(microelements).join(' ').replaceAll(',', '=');
        console.log(storageRep);
    }

    function prepare(recipe, quantity) {
       let x = Object.entries(recipe)

    }

    const actions = {
        restock,
        report,
        prepare: (recipe, quantity) => prepare(storage[recipe], quantity)
    }

    return input => {
        const [command, a, b] = input.split(' ')


        return actions[command](a, b)
    }
}
let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in