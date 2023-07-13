function employes(input) {
    //Solution without objects
    // for (const line of input) {
    //     console.log(`Name: ${line} -- Personal Number: ${line.length}`);
    // }

    let listOfPpl = {}
    input.forEach(person => {
        listOfPpl[person] = person.length
    })

    for (const key in listOfPpl) {
                console.log(`Name: ${key} -- Personal Number: ${listOfPpl}`);

    }
    console.log(listOfPpl);
}
employes([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

])