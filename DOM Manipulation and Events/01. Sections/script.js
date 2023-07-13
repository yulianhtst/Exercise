function create(words) {
   let content = document.getElementById('content')

   content.addEventListener('click', (e) => {
      if(e.target.children[0].style.display != 'block'){
         e.target.children[0].style.display = 'block'
      }else{
         e.target.children[0].style.display = 'none'
      }
   })
   for (const word of words) {
      let div = document.createElement('div')
      let paragraph = document.createElement('p')
      let text = document.createTextNode(word)

      paragraph.appendChild(text);
      paragraph.style.display = 'none';
      div.appendChild(paragraph);

      content.appendChild(div)
   }


}