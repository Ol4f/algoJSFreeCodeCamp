var vowel = ["a","e","i","o","u"];
var consonantCluster = ["bl","br","cl","cr","dr","fl","fr","gl","gr","pl","pr","sc","sk","sl","sm","sn","sp","st","sw","scr","spr","spl","str","tr"];
console.log(consonantCluster);
function translatePigLatin(str) {
  var temp = str.split("");
  var ccCheck;
  var ccElement;
  var vowelCheck;
  var elementToPush;
  for (var x = 0;x < consonantCluster.length;x ++){
    let checker = new RegExp("^" + consonantCluster[x],"gi");
    if (checker.test(str)) {
      ccCheck = true;
      ccElement = consonantCluster[x];
      break;
    }
    if (!checker) {
      ccCheck = false;
    }
  }
  for (var i = 0; i < vowel.length; i ++){
      if (temp[0] == vowel[i]){
        vowelCheck = true;
        break;
      }
      else vowelCheck = false
  }
  if(vowelCheck){
    temp.push("way");
  }
  else{
      if (ccCheck) {
        elementToPush = temp.slice(0,ccElement.length).join("") + "ay";
        temp.splice(0,ccElement.length);
        temp.push(elementToPush)
      }
    else {
      elementToPush = temp[0] + "ay";
      temp.splice(0,1);
      temp.push(elementToPush);
    }
  }
  str = temp.join("");
  return str;
}

console.log(translatePigLatin("glove"));
