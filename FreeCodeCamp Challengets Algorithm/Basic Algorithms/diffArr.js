
function diffArray(arr1, arr2) {
  var newArr = [];
  for (var x in arr1){
    if (arr2.indexOf(arr1[x]) < 0 ) {
      newArr.push(arr1[x]);
    }
  }
  for (var y in arr2){
    if (arr1.indexOf(arr2[y]) < 0 ) {
      newArr.push(arr2[y])
    }
  }
  // Same, same; but different.
  console.log(newArr);
  return newArr;
}

diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt",]);
