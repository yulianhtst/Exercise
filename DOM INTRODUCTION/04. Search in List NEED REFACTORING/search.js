function search() {
   let search = document.getElementById('searchText').value
   let result = document.getElementById('result')
   let list = Array.from(document.querySelectorAll('ul[id="towns"] li'))
   let count = 0;

   list.forEach(x => {
      x.style.fontWeight = 'normal';
      x.style.textDecoration = 'none';
   })

   list.map(x => {
      if (x.textContent.substring(0, search.length).toLocaleLowerCase() == search.toLocaleLowerCase()) {
         x.style.fontWeight = 'bold';
         x.style.textDecoration = 'underline';
         count++
      }

   })
   result.textContent = `${count} matches found`;
}
