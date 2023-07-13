function json(name, lastName, hairColor) {
    let obj = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    }
    let string=JSON.stringify(obj)
    console.log(string);
}
json('George', 'Jones', 'Brown')