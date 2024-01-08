console.log("-:Bacic baget bill:-");

let unit = () => {
    let unit = 24;
    return unit;
}
let ans = unit();

let ElectricityBill = (ans) => {
    if (ans >= 0 && ans <= 10) {
        total = ans *5;
           console.log(`Your total bill in a :- ${total}`);
    }
    else if (ans >= 11 && ans <= 20) {
        total = ans *10;
           console.log(`Your total bill in a :- ${total}`);
    }
    else if (ans >= 21 && ans <= 25) {
        total = ans *20;
           console.log(`Your total bill in a :- ${total}`);
    }
    else{
         console.log("Please enter valid unit .unit should not negative ");
    }
}
ElectricityBill(ans);