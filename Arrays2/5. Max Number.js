function findTopIntegers(array) {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    let isGreater = true;
    let currentToken = array[i]
    // console.log(array[i]);
    for (let j = i + 1; j < array.length; j++) {
      if (currentToken < array[j]) {
        isGreater = false;
      }
    }
    if (isGreater) {
      arr.push(currentToken)
    }
  }
  console.log(arr);
}
findTopIntegers([14, 24, 3, 19, 15, 17])