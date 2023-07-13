function searchForNumber(nums, actions){   
    let numbersToTake=actions[0]
    let numbersToDelete=actions[1]
    let specialNumber=actions[2]
    let counter=0;

    let takenNumbers= nums.slice(0,numbersToTake)//Копие на масива до index[numbersToTake] //<5
    takenNumbers.splice(0,numbersToDelete); //<2

    for (const number of takenNumbers) {
        if(number===specialNumber){
            counter++;
        }
    }
    console.log(`Number ${specialNumber} occures ${counter} times`);
}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]) 