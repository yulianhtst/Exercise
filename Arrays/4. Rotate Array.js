function rotate(arr, step) {

    for (let i = 0; i < step; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement)
    }

    console.log(arr.join(' '));
    return arr.join(' ')
}
rotate(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15)