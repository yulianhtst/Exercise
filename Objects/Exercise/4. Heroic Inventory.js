function heroic(input) {
    return JSON.stringify( input.map(x => {
        let [name,level,items]= x.split(' / ')
        items=items? items.split(', '):[];
        level=Number(level);
        return ({name,level,items})
}));
}

console.log(heroic(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));