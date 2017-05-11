
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var check = /\s/g;
  var tempArr = [];
  var checkEle = target;
  if (check.test(str)){
    tempArr = str.split(" ");
    var check2 = new RegExp(checkEle,"g")
    if (check2.test(tempArr[tempArr.length - 1])) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    //  console.log(str.substr(-1, 1));
    if (target == str.substr(-target.length, target.length))

      return true;
    else {
      return false;
    }
  }

}
//console.log("conner...dfafdsf");
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Bastian", "Tian"));
