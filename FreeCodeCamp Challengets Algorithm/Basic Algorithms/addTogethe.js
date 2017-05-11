var  firstElement = 0;
function checkNaN(a){
  if (isNaN(a)) {
    return isNaN(a);
  }
  if((a+0) !== (Number(a)+0)) return true;
  return false;
}
function addTogether() {
  var temp = Array.prototype.slice.call(arguments);
  for (var i = 0;i<temp.length;i++){
      if (checkNaN(temp[i])) {
        return undefined;
      }
  }
  if (temp.length == 2){
    return temp[0] + temp[1];
  }
  else{
      firstElement = temp[0];
      return function (a) {
          if (checkNaN(a)) return undefined;
          return a + firstElement;
      }
  }
}
console.log(addTogether(15,14));
