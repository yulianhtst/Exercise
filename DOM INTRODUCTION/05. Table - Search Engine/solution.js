function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let html = {
      searchInput: document.getElementById('searchField'),
      searchBtn: document.getElementById('searchBtn'),
      tableArr: Array.from(document.querySelector('tbody').children)
   }


   function onClick() {
      for (const table of html.tableArr) {
         let rowValue = table.textContent.toLocaleLowerCase()
         let fieldInput = html.searchInput.value.toLocaleLowerCase()

         if (fieldInput !== '' && rowValue.includes(fieldInput)) {
            table.classList.add('select')
         } else {
            table.classList.remove('select')
         }
      }
   }
}