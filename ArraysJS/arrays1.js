let distinctArr = function (arr) {
    //Това може да се прави с Set 

    let uniqueNumbersArr = [];
    let arraylength = arr.length;

    for (let index = 0; index < arraylength; index++) {
        if (!uniqueNumbersArr.includes(arr[index])) {
            uniqueNumbersArr.push(arr[index]);
        }
    }
    console.log(uniqueNumbersArr.join(' '));
}
distinctArr([
    7, 8, 9, 7, 2, 3, 4, 1,
])

// let distinctArr = function (arr) {

//     //Решение с Set()
//     let uniqueNumbers = new Set(arr);
//     console.log([...uniqueNumbers]);
// }
// distinctArr([
//     7, 8, 9, 7, 2, 3, 4, 1,
// ])