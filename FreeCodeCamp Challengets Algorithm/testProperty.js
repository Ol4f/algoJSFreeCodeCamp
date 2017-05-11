function truthCheck(collection, pre) {
  // Is everyone being true?
  for (var i = 0;i < collection.length; i ++){
    if (!collection[i].hasOwnProperty(pre)) {
      return false;
    }
    if(collection[i][pre] === undefined || collection[i][pre] === 0 || collection[i][pre] === null || collection[i][pre] === false || collection[i][pre].length === 0){
      return false;
    }
    if (isNaN(collection[i][pre])) {
      return false;
    }
  }
  return true;
}

var resule = truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
console.log(resule);

var test = {
  "single" : NaN
}
if (typeof test.single == "number" && isNaN(test.single)) {
  console.log(false);
}
console.log(typeof test.single);
