function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    let temp;
    temp = after.split("");
    temp[0] = temp[0].toUpperCase();
    after = temp.join("");
  }
  var repWord = new RegExp(before,"gi");
  str = str.replace(repWord,after);
  return str;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
