function as(array) {
    let original = array.reduce((a, v) => {
        return a + v;
      }, 0);
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            array[i] += i
        } else {
            array[i] -= i
        }
    }
    let modified = array.reduce((a, v) => {
        return a + v;
      }, 0);
    console.log(array);
    console.log(original);
    console.log(modified);
}
as([5, 15, 23, 56, 35])