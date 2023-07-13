function solve() {
  let text = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value.toLowerCase();
  let result = '';

  if (currentCase == 'pascal case') {
    for (let index = 0; index < text.length; index++) {
      console.log(text[index]);
    }
  } else if (currentCase == 'camel case') {
    for (let index = 0; index < text.length; index++) {
      if(text[index]==' '){
        result+=text[index+1].toUpperCase();
        index++
      }else{
        result+=text[index].toLowerCase();
      }
    }
  } else {
    console.log('else');
  }
}