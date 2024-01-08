 let note =(amount)=>{
   const notes = [2000,500,100,50,20,10,5,2,1];
   const res = {};
     for(let amu of notes){
       const count = Math.floor(amount/amu);
       if(count >0){
         res[amu]=count;
         amount %=amu;
       }
     }
      return res;
}
  const totalAmount = 335;
  const banknote = note(totalAmount);

  console.log(`-:----- Banknote Breakdown -----:-`);
  for(let amu in banknote){
    console.log(`Number of ${amu} banknotes : ${banknote[amu]}`);
  }
// let amount = 3000;
// let a = '', b= '', c= '', d= '', e= '', f= '', g= '', h= '';

//    if(amount >= 2000){
//        a = Math.floor(amount/2000);
//        amount -= a*2000;
//    }
//    if(amount >= 500){
//     b = Math.floor(amount/500);
//     amount -= b*500;
// }
// if(amount >= 100){
//   c = Math.floor(amount/100);
//   amount -= c*100;
// }
// if(amount >= 50){
//   d = Math.floor(amount/50);
//   amount -= d*50;
// }
// if(amount >= 20){
//   e = Math.floor(amount/20);
//   amount -= e*20;
// }
// if(amount >= 10){
//   f = Math.floor(amount/10);
//   amount -= f*10;
// }
// if(amount >= 5){
//   g = Math.floor(amount/5);
//   amount -= g*5;
// }
// if(amount >= 1){
//   h = Math.floor(amount/1);
//   amount -= h*1;
// }

// console.log(` Number of 2000 Banknotes :-  ${a}`);
// console.log(` Number of 500 Banknotes :-   ${b}`);
// console.log(` Number of 100 Banknotes :-   ${c}`);
// console.log(` Number of 50 Banknotes :-   ${d}`);
// console.log(` Number of 20 Banknotes :-   ${e}`);
// console.log(` Number of 10 Banknotes :-   ${f}`);
// console.log(` Number of 5 Banknotes :-   ${g}`);
// console.log(` Number of 1 Banknotes :-   ${h}`);
