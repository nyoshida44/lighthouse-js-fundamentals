// undefined value for testing
let testvar;

function range(start, end, step) {
  if (start == null || start > end) {
    console.log('error 1')
    return [];
  } else if (end == null) {
    console.log('error 2')
    return [];
  } else if (step == null || step <= 0) {
    console.log('error 3')
    return []
  } else {
    let some_array = [];
    for (start; start <= end; start += step) {
      some_array.push(start);
    }
    console.log(some_array);
    return some_array;
  }
}

// Tests
range(5,1,10);
range(3, testvar, 20);
range(2, 10, -5)
range(0, 10, 2);
range(10, 30, 5);
range(-5, 2, 3);