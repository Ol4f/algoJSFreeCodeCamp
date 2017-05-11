function sym(args) {
  var arr = Array.prototype.slice.call(arguments);
  var pointer = 0;
  var tempArr = [];
  tempArr = symDif(arr[pointer],arr[pointer+1]);
  pointer = 2;
  while (pointer < arr.length){
    tempArr = symDif(tempArr,arr[pointer]);
    pointer += 1;
  }
  return tempArr.sort();

}
function symDif(arr1,arr2){
  var testCounter;
  var arr = [];
  arr.push(arr1);
  arr.push(arr2);
  var arrDup = arr;
  var tempArr = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      testCounter = 0;
      if (tempArr.indexOf(arr[i][j]) < 0) {
        for (var k = 0; k < arrDup.length;k++){
          if (arrDup[k].indexOf(arr[i][j]) >= 0) {
            testCounter ++;
          }
        }
        if (testCounter < 2) {
          tempArr.push(arr[i][j]);
        }
      }
    }
  }
  return tempArr;
}

var result = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])
console.log(result);
