//function largestOfFour(arr) {
  var arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
  var temp = [];
  var max = [];
  var j= 0;
  //console.log(arr[0].length);
  for(var i = 0; i < arr.length; i ++){
    max[i] = 0;
  }
  //console.log(arr.length);
  for (i = 0; i < arr.length; i ++){
    console.log(arr[i].length);
    console.log(arr[i]);
    while (j<arr[i].length){
      console.log(arr[i][j]);
      if (max[i] < arr[i][j]) {
        max[i] = arr[i][j];
      }
      j = j + 1;

    }
    j = 0;
  }
console.log(max);
  // You can do this!
  //return max;
//}

//console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
