
const inputValue = input.split(' ');
const a = inputValue[0];
const b = inputValue[1];

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a,b) {
    return a * b / gcd(a,b);
}

console.log(gcd(a, b)); 
console.log(lcm(a, b)); 