function equal(arr) {
    let counter = 0;
    console.log(`Array length ${arr.length}`);

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];
        console.log(row);

        for (let j = 0; j < row.length; j++) {
            let col = row[j];

            if (i !== arr.length - 1) {
                if (col === row[j + 1] || col === arr[i + 1][j]) {
                    counter++;
                }
            }
            else if (col === row[j + 1] || col === arr[i][j + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}
equal([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

// equal([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']
// ]);