function mutation(arr) {
  var temp = [];
  for (var i in arr){
    arr[i] = arr[i].toLowerCase();
  }
  temp = arr[1].split("");
  var checkNum = 0;
  for ( var x in temp){
    if (arr[0].indexOf(temp[x]) != -1){
      checkNum += 1;
    }
  }
  if (checkNum == temp.length) return true;
  else return false;
}

console.log(mutation(["floor", "for"]));
