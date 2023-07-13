function calorieObject(input) {
    let obj = {};
    let inputL = input.length
    for (let index = 0; index < inputL; index += 2) {
        let productName = input[index];//Тука индекса е 0
        let calories = Number(input[index + 1]);//Парсваме го към число//Трябва да го направим 1 да взема втория елемент затова ++
        obj[productName]=calories;//Като ключ отива [productName] а като стойност [calories]
    }
    console.log(obj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])