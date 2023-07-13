function merge(f, s) {
    let result = []
    for (let i = 0; i < f.length; i++) {
        if(i%2==1){
            result.push(f[i]+s[i])
        }else{
            result.push(Number(f[i])+Number(s[i]))
        }
    }
    console.log(result.join(' - '));

}
merge(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])