
function pairwise(arr, arg) {
  var indices = [];
  var tempTest = -1;
  var sum = 0;
  if (arr.length <= 0) {
    return 0;
  }
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if (arr[i]+arr[j] == arg && j != tempTest && i != tempTest) {
        indices.push(i+j);
        tempTest = j;
        break;
      }
    }
  }
  console.log(indices);
  if (indices.length == 1) {
    return indices[0];
  }
  return indices[0] + indices[1];
}

console.log(pairwise([1, 1, 1], 2));
