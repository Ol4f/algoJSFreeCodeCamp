
function destroyer(arr) {
  // Remove all the values
  var argTemp = [];
  argTemp = Array.prototype.slice.call(arguments);
  arr = argTemp[0];
  argTemp.splice(0,1);
  for (var x in argTemp){
    deleteDuplicate(arr,argTemp[x]);
  }
  for (var x in argTemp){
    deleteDuplicate(arr,argTemp[x]);
  }
  //console.log(arr);
  return arr;
}
function deleteDuplicate(arr,val) {
  var regex = new RexExp(val,)
  for (var x in arr) {
    if(arr[x] === val) arr.splice(x,1);
  }
  return arr;
}
var result = destroyer([3, 5, 1, 2], 3, 5);
console.log(result);
var arr = [3, 5, 1, 2, 2]
var x = 2;
console.log(arr.indexOf(2));
