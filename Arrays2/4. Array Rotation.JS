function rotate(arr, times) {
    for (let i = 0; i < times ; i++) {
       let el= arr.shift()
       arr.push(el)
    }
    console.log(arr.join(' '));
}
rotate([32, 21, 61, 1], 4)