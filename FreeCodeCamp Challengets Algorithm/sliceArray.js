/*var arr = ["a", "b", "c", "d","e","f","j",7,0];
var temp =[];
var pivot = 0;
var n = arr.length/size;
for ( var x = 0; x < n; x ++){
  temp.push(arr.splice(pivot,size));
}
console.log(arr);
//temp.push(arr.splice(pivot,m));
console.log(temp);
*/

function chunkArrayInGroups(arr, size) {
  var temp =[];
  var pivot = 0;
  var n = arr.length/size;
    temp.push(arr.splice(pivot,size));

  return arr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d","e","f","j",7,0],5));
