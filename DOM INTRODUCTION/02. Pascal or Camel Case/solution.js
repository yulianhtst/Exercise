function solve() {
  let text = document.getElementById('text').value.toLowerCase().split(' ')
  let namingConvention = document.getElementById('naming-convention').value
  let result = document.getElementById('result')

  if (namingConvention == 'Camel Case') {
    for (let i = 1; i < text.length; i++) {
      text[i] = text[i][0].toUpperCase() + text[i].substring(1);
    }
    const camelCaseText = text.join('');
    result.textContent = camelCaseText
  } else if (namingConvention == 'Pascal Case') {
      result.textContent = text.map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('')
  }else{
    result.textContent='Error!'
  }

}