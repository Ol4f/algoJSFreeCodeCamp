var arr=[];
var char = "dcm";
for (var  x = 0;x<0;x++){
  arr.push(char);
}
console.log(arr);

var regex = /3+/g
var arr = [3,5,6,7,8,3,3];

for (var i = 0; i < arr.length; i++) {
  var regex = new RegExp(arr[i]+"+","g");
  var count = arr.match(regex).length;
  console.log(count);

}
