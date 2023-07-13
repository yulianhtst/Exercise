function json(string) {
    let json = JSON.parse(string)
    for (const key in json) {
        console.log(`${key}: ${json[key]}`);
    }
}
json('{"name": "George", "age": 40, "town": "Sofia"}')