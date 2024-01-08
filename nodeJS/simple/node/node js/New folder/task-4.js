//search methode ====array ma========================

const value = ['ram','sita','narayan','ghnasyam','mahadev'];

// Finding the first even number
const evenNumber = value.find((v) => {
     return v == 'ram';
      });
//search methode ====string  ma========================

console.log(evenNumber); 
let text = "Mr. Blue has a blue house"
let position = text.search("Blue");
   console.log(position);


// sorting method=================================
var arr= ["C","Java","Flutter","Node js","PHP","Ruby"];
var result = arr.sort();
// document.write("Ans = "+result);
console.log("reselt := "+result);