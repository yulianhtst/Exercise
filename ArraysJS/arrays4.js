function sortArray(arr){
    //Arrow Functions
    //Ако имаме повече от един параметър (Кръгли скоби), ако е само един няма нужда 
    //Ако я напишем с къдреви скоби задължително трябва да има [return]
let sortedArray=arr.sort((a,b)=>a.length-b.length || a.localecompare(b))// Първо сравнява по дължина || localecompare() Сравнява по азбучен ред 
// console.log(sortedArray.join('\n'));
// Алтернатива
sortedArray.forEach(element => {
    console.log(element);
});
}
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']); 