// const lookupChar = require('./3. Char Lookup');
// const {expect}=require('chai')

// describe('lookupChar Function Test', () => {
//     it('Test with float',()=>{
//         expect(lookupChar('Hello World', 3.5)).to.be.undefined
//     })  
//     it('Test with undefined',()=>{
//         expect(lookupChar('Hello World',undefined)).to.be.undefined
//     })  
//       it('Test with greater index',()=>{
//         expect(lookupChar('Hello World', 'Hello World'.length+1)).to.be.equal("Incorrect index")
//     })   
//      it('Test with zero index',()=>{
//         expect(lookupChar('Hello World', -5)).to.be.equal("Incorrect index")
//     })   
//      it('Test with positive',()=>{
//         expect(lookupChar('Hello World', 2)).to.equal('l')
//     })
//      it('Test with positive',()=>{
//         expect(lookupChar('Hello World', 0)).to.equal('H')
//     })

// })

// // function lookupChar(string, index) {
// //     if (typeof(string) !== 'string' || !Number.isInteger(index)) {
// //     return undefined;
// //     }   
// //     if (string.length <= index || index < 0) {
// //     return "Incorrect index";
// //     }
// //     return string.charAt(index);
// //    }
   
// //    module.exports= lookupChar