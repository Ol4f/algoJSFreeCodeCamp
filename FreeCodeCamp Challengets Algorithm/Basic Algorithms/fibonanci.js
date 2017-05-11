function Fibonancy(num) {
  if (num == 1 ) {
    return 1;
  }
  if (num == 2) {
    return 1;
  }
  return Fibonancy(num-1) + Fibonancy(num-2);
}

console.log(Fibonancy(6));
function sumFibs(num) {
  var sum;
  var current = 1;
  var previous = 0;
  while (current <= num){
    if(current % 2 !== 0){
      sum += current;
    }
    current += previous;
    previous = current - previous;
  }
  return sum;
}

console.log(sumFibs(4));
