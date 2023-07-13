function train(arr){
    //shift() gets the Index passed and errasses it from the array;
    //split() splits the returned value from shift()[Not Only can be used directly on arr] and returns arr of strings
    //map() using map to convert string to Nu
    let passangersInTrain=arr.shift().split(' ').map(Number);
    let maxCapacity=Number(arr.shift());
    let arraylength=arr.length;
    
    for(let index=0;index<arraylength;index++ ){
        let currentRow=arr[index].split(' ');
        if(currentRow[0]==='Add'){
            let newWagonPassenger=Number(currentRow[1]);
            passangersInTrain.push(newWagonPassenger);
        }else{
            for(let j=0;j<passangersInTrain.length;j++){
                let passangerInCurrentWagon=passangersInTrain[j];
                if(passangerInCurrentWagon+Number(currentRow[0])<=maxCapacity){
                    passangersInTrain[j]+=Number(currentRow[0]);
                    break;
                }
            }
            
        }
    }
    
    console.log(passangersInTrain.join(' '));
}
train(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    '30',

    '10',

    '75'])