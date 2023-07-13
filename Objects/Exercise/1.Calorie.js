function cal(arr){
    let c= arr.reduce((a,v,i)=>{
        if(i%2===0){
            a[v]=Number(arr[i+1])
        }
        return a
    },{})
    console.log(c);
}
cal(['Yoghurt', '48', 'Rise', '138',
'Apple', '52'])