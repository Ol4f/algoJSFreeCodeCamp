var regularSymbol = /[\(\)\s\-]/gi;
function isNationCode(arg) {
  var checkResult = typeof arg;
  if (checkResult == "number") {
    if (arg != 1) {
      return false;
    }
    return true;
  }
  if (checkResult == "object") {
    if (arg.shift() != 1) {
      return false;
    }
    return true;
  }
  return false;
}


function telephoneCheck(str) {
  // Good luck!
  var temp = str;
  //console.log(/[\(\)]/.test(temp));
  str = str.split(regularSymbol);
  console.log(str);
  console.log(str.join(""));
  if (/\(/gi.test(temp) == true && /\)/gi.test(temp) == false) {
      return false;
  }
  console.log("pass");
  if (/\)/gi.test(temp) == true && /\(/gi.test(temp) == false) {
    return false;
  }
  console.log("pass");
  if (/[\(\)]/.test(temp) == true && str[1].length == 10) {
    return false;
  }
  console.log("pass");
  if (str.join("").length > 11 || str.join("").length < 10) {
    return false;
  }
  console.log("pass");
  /*if (str.join("").length == 11 && /[\(\)]/.test(temp) === true) {
    return false;
  }*/
  console.log("pass");
  if (str.join("").length == 11) {
    if (!isNationCode(str)) {
      return false;
    }
    for (var x in str){
      if (isNaN(str[x])) {
        return false
      }
    }
    return true;
  }
  if (str.join("").length == 10) {
    console.log(str.length);
    for (var i in str){
      if (isNaN(str[i])) {
        return false
      }
    }
    return true;
  }
}



console.log(telephoneCheck("1 (555) 555-5555"));
