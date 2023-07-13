function sort(arr, dependency) {
    return dependency === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a)
}
sort(
    [14, 5, 15, 7, 18, 2],
    'desc'
)