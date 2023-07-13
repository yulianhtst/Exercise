function sortOj(input) {
    let char = ''
    let sortedArr = input.sort((a, b) => a.localeCompare(b))
    for (let i = 0; i < sortedArr.length; i++){
        if(sortedArr[i][0]!==char){
            console.log(sortedArr[i][0]);
        }
        console.log(`${sortedArr[i]}`);
        char=sortedArr[i][0]
    }

}
sortOj(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']
)