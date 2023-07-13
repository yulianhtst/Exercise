function solve(array, digit) {

    for (let i = 0; i < array.length; i++) {
        let currentIndex = array[i];

        for (let j = i + 1; j < array.length; j++) {
            let currentIn = array[j];
            if (currentIndex + currentIn == digit) {
                console.log(`${currentIndex} ${currentIn}`);
            }
        }


    }
}
solve([14, 20, 60, 13, 7, 19, 8],
    27
)