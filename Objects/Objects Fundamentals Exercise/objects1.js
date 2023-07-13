function towns(input) {
let maps={}
    for (const line of input) {
        // let cities = line.split(' | ')
        // let townName=cities[0]
        // let latitude=cities[1]
        // let longitude=cities[2]
        
        //Това е същото като горното 
        let [townName,latitude,longitude]= line.split(' | ')

        maps.town=townName;
        maps['latitude']=Number(latitude)
        maps.longitude=Number(longitude)
    }

}
towns(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625'])