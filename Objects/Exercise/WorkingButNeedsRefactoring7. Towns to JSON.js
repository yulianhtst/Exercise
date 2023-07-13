function foo(arr) {
    let [town,latitude,longitude]=arr.shift().trim().split('|').filter(x=>x!='')
    let output=[]

    for (const items of arr) {
        const[t,la,lo]=items.trim().split('|').filter(x=>x!='')

        let lat=Number(la).toFixed(2)
        let lon=Number(lo).toFixed(2)
        let objects={
            [town.trim()]:t.trim(),
            [latitude.trim()]:Number(lat),
            [longitude.trim()]:Number(lon),
        }
        output.push(objects)
    }
    return JSON.stringify(output)

}
foo(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])