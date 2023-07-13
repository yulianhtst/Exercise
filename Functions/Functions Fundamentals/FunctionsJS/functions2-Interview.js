function palindromeIntegers(numberArray) {
    let numberArrayLength = numberArray.length;


    //=================Алгоритмичен Подход=================//
    // for(let index=0;index<numberArrayLength;index++){
    //     let numberAsString=numberArray[index].toString();
    //     let reversedString='';
    //     for(let j=numberAsString.length-1;j>=0;j--){
    //         reversedString+=numberAsString[j]
    //     }
    //     if(numberAsString===reversedString){
    //         console.log('True');

    //     }else{
    //         console.log('False');
    //     }
    // }

    for (let index = 0; index < numberArrayLength; index++) {
        let numberAsString = numberArray[index].toString();
        let reversedString = numberAsString.split('').reverse().join(''); //По този начин се обръша Масив в JS
        if (numberAsString === reversedString) {
            console.log('True');

        } else {
            console.log('False');
        }
    }
}
palindromeIntegers([123, 323, 421, 121]);
// let word='Test';
// let result=[1,2,3].join(' '); //Array To String
// console.log(result.split(' ')); //String to Array