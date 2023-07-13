function nth(arr, num) {
    const nth = []
    for (let i = 0; i < arr.length; i += num) {
        nth.push(arr[i])
    }

    console.log(nth);
}

nth(['5',
    '20',
    '31',
    '4',
    '20'],
    2)