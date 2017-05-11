
function sumAll(arr) {
  if (arr.length > 2) return;
  var max = arr.reduce(function(a,b){
    return Math.max(a,b);
  })
  //console.log(max);
  arr.splice(arr.indexOf(max),1);
  //console.log(arr);
  var min = arr[0];
  //console.log(min);
  var sum = 0;
  for (var i = min ; i <= max ; i++) {
    sum += i;
  }
  return sum;
}

sumAll([10,5]);
console.log(sumAll([155,1]));
