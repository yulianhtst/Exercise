function x(input) {
    let count = 0;
    const nums=[];
    input.forEach((x,i) => {
        count++
        if (x == 'add') {
            nums.push(count)
        } else {
            nums.pop()
        }

    })
console.log(nums);
}
x(['add',
    'add',
    'remove',
    'add',
    'add']
)
// x(['add',
// 'add',
// 'add',
// 'add']
// )