function arrayDemo(arr) {
    let sortedArray = arr.sort((a, b) => a - b)
    let result = [];
    // let sortedArray=[...sortedArray];
    // let sortedArray=sortedArray.slice(0) //1Пар От кой начален индех,2Пар До края на кой индех ,Да копира [0 Копира вси]

    for (let index = 0; index < sortedArray.length; index++) {
        
        let lastElement = sortedArray.pop();
        let firstElement = sortedArray.shift()
        result.push(lastElement)
        result.push(firstElement)
    }
    result.push(sortedArray.pop());
    result.push(sortedArray.shift());

    console.log(result.join(' '));
}
arrayDemo([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])