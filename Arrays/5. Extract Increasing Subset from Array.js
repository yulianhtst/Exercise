function sorted(arr) {
    return arr.reduce((a, v) => {
        //Когато имаме <=,=> добавяме -1 на лент 
        if (v >= (a[a.length - 1] || arr[0])) {
            a.push(v)
        }
        return a
    }, [])
}
sorted(
    [20,
        3,
        2,
        15, 6,
        1])