function oddAndEvenSum(number){
 let numberAsString=number.toString();
 let evenSum=0;
 let oddSum=0;
 let numberAsStringLength=numberAsString.length
 //Запазваме дължината на стринга в променлива ,за да не се налага при всяко завъртане да се изчислява наново дължината а само веднъж
 for(let index=0;index<numberAsStringLength;index++){

    let singleNumber=Number(numberAsString[index]); 
    if(singleNumber%2===0){
        evenSum+=singleNumber;
    }else{
        oddSum+=singleNumber;
    }
  }
   console.log(`odd sum=${oddSum}, Even sum=${evenSum}`);
}
oddAndEvenSum(1651216548461321)