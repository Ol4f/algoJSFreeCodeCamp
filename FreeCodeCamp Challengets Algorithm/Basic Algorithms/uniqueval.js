function uniteUnique(arr) {
  var temp = Array.prototype.slice.call(arguments);
  var tempArr = [];
  var result = [];
  var checkFlag = 0;
  for(var i = 0; i < temp[0].length;i++){
    result.push(temp[0][i]);
  }
  for(var j = 1; j < temp.length;j++){
    for (var x = 0; x < temp[j].length; x ++){
      if (result.indexOf(temp[j][x]) < 0) {
        result.push(temp[j][x]);
      }
    }
  }
 //for (var x = 0;x < ){}
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
