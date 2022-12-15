

 let summ = prompt("entre summ");

//let summ = 160;
let summRemise = 150;
let remise = 1;

function payerTotale(summ, summRemise, remise) {
  summ = Number(summ);
  if (summ >= summRemise) {
   return summ - summ*remise/100;
  }else {
    return summ;
  }
}

alert(payerTotale(summ, summRemise, remise));




// function foo(num) {
//   if (num === 1) {
//     return 1;
//   }else {
    
//      return num*foo(num - 1);
//   }
  
// }
// console.log(foo(4));
