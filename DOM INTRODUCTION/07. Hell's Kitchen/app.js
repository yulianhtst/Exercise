function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let bestRestaurantO = document.querySelector('#bestRestaurant p')
   let workersO = document.querySelector('#workers p')

   function onClick() {
      const parsedInput = JSON.parse(document.querySelector('#inputs textarea').value)
      let avrgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0
      let bestName = '';
      let obj = {}

      for (let i = 0; i < parsedInput.length; i++) {
         let [name, staff] = parsedInput[i].split('-')


         let workers = Object.fromEntries(staff.split(',').map(x => x.trim().split(' ')))

         if (!obj.hasOwnProperty(name)) {
            obj[name] = {};
         }
         if (obj.hasOwnProperty(name)) {
            obj[name] = workers;
         }
      }
      let entries = Object.entries(obj);
      for (const entry of entries) {

         let key = entry[0]
         console.log(entry[0]);
         let values = Object.values(entry[1])

         for (const salary of values) {
            totalSalary += Number(salary)
         }
         avrgSalary = totalSalary / values.length;

         if (avrgSalary > currAvgSalary) {
            currAvgSalary = avrgSalary
            bestName = key;
            totalSalary = 0
         }
      }

      let result = Object.entries(obj[bestName]).sort((a, b) => b[1] - a[1])
      let print = ''

      result.forEach(x => print += `Name: ${x[0]} With Salary: ${x[1]}`)
      let restaurant = `Name: ${bestName} Average Salary: ${avrgSalary.toFixed(2)} Best Salary:${(result[0])}`
      bestRestaurantO.textContent = restaurant
      workersO.textContent = print
   }
}
//: ["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]