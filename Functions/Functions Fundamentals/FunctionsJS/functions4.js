function matrix(number){
    // let arr=[] //Това е към първия пример

    let rowGenerator=()=>{
        let singleRow='';
        for(let k=1;k<=number;k++){
            singleRow+=`${number} `;
        } 
        return singleRow;
    }

    for(let i=1;i<=number;i++){

        arr.push(rowGenerator());
    }
    console.log(arr.join('\n'));

    
//======= Алгоритмично Решение =======//
    // for(let i=1;i<=number;i++){
    //     let output='';
    //     for(let k=1;k<=number;k++){
    //         output+=`${number} `;
    //     }
    //     arr.push(output);
    // }
    // console.log(arr.join('\n'));
}
matrix(3);