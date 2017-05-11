function getIndexToIns(arr, num) {
  arr = arr.sort(function (a,b){
    return a - b;
  });
  console.log(arr);
  if (num == arr[0]) return 0;
  for (var x = 0;x < arr.length; x ++){
    if(num > arr[x] && num < arr[x+1] && arr[x] !== undefined){
      return x + 1;
    }
    if(num > arr[x] && arr[x+1] === undefined)
      return x + 1;
    if (num == arr[x] && num < arr[x+1])
      return x;
  }
  // Find my place in this sorted array.

}
console.log(getIndexToIns([3, 10, 5], 3));
