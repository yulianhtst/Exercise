function lowest(input) {
    let lowestPrices = []


    for (let i = 0; i < input.length; i++) {
        const [city, product, price] = input[i].split(' | ')

        let brand = {
            city,
            product,
            price,
        }

        lowestPrices.push(brand)
    }


    let sort = lowestPrices.sort((a, b) => a.price - b.price).sort((a, b) => (b.product).localeCompare(a.product))
    let tempObj = {}
    for (let i = 0; i < sort.length; i++) {
        if (!tempObj.hasOwnProperty(sort[i].product)) {
            console.log(`${sort[i].product} -> ${sort[i].price} (${sort[i].city})`);
        }
        tempObj[sort[i].product] = '';
    }


}
lowest(
    ['Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10']
)