function isOdd(num) {
  return num % 2 === 1 || num % 2 === -1;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log("1782937254792083 is odd: " + isOdd(1782937254792083));
console.log("-123 is odd: " + isOdd(-123));
console.log("0 is odd: " + isOdd(0));