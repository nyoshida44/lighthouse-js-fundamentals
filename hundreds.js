function howManyHundreds(doesItHundred) {
  let times;
  times = (doesItHundred / 100) - ((doesItHundred % 100) * 0.01);
  return Math.round(times);
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);