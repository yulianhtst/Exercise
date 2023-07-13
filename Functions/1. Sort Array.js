function sortArr(arr, cmd) {
    return arr.sort((a, b) => {
        if (cmd == 'asc') {
            return a - b
        } else {
            return b - a
        }
    })
}
sortArr([14, 7, 17, 6, 8], 'desc')