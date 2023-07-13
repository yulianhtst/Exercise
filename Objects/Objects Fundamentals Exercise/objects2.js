function storeProvision(available, delivery) {
    let storedProducts = {}
    available.forEach(product => {
        if (available.indexOf(product) % 2 == 0) {
            storedProducts[product]=' '
        }else{
            // storedProducts=
        }
    });
    console.log(storedProducts);

}
storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ])