function names(input) {
    input.sort((a, b) => a.localeCompare(b)).forEach((x, i) => console.log(`${i + 1}.${x}`));
}
names(["John",
    "Bob",
    "Christina",
    "Ema"]
)