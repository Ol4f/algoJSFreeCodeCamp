function gcd(a,b){
  if (a > b) {
    while (b !== 0) {
      var t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
  if (a < b) {
    while (a !== 0) {
      var t = a;
      a = b % a;
      b = t;
    }
    return b;
  }
  if(a=b) {
    return a;
  }
}
console.log(gcd(1,1));
//console.log(12*56/gcd(12,56));
var arr = [1,2,3,4,5,6,7];
var multiple=arr[0];
//console.log(multiple);
arr.forEach((val,index)=>{
  //console.log(val);
  multiple = parseInt((multiple*val)/gcd(multiple,val));
  //console.log(multiple);
  }
);
console.log(multiple);
