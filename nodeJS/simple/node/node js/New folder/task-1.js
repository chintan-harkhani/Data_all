console.log("-:Simple Calculation:-");
let calc1 = () => {
    let a = 30;
    return a;
}
let calc2 = () => {
    let b = 20;
    return b;
}
let p = calc1();
let q = calc2();
let add = (p, q) => {
    let ans = p + q;
    console.log(`addition of  :- ${ans}`);
}
add(p, q);
let sub = (p, q) => {
    let ans = p - q;
    console.log(`Subtraction of  :- ${ans}`);
}
sub(p, q);
let mul = (p, q) => {
    let ans = p * q;
    console.log(`multiplication of  :- ${ans}`);
}
mul(p, q);
let div = (p, q) => {
    let ans = p / q;
    console.log(`division of  :- ${ans}`);
}
div(p, q);
let mod = (p, q) => {
    let ans = p % q;
    console.log(`modulaes of  :- ${ans}`);
}
mod(p, q);