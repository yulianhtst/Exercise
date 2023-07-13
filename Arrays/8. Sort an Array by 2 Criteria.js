function srt(input) {

   input.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length).forEach(x=>console.log(x))

}
srt(['test',
    'Deny', 'omen',
    'Default']
)