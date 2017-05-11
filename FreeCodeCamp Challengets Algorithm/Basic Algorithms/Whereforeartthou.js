function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var flag = 0;
  var tempKey = Object.keys(source);
  for (var i = 0; i < collection.length; i ++){
    for ( var j = 0;j < tempKey.length;j++){
      if (collection[i].hasOwnProperty(tempKey[j])) {
          if (collection[i][tempKey[j]] === source[tempKey[j]]) {
            flag ++;
        }
      }
      else break;
    }
    if (flag == tempKey.length) {
      arr.push(collection[i]);
    }
    flag = 0;
  }

  // Only change code above this line
  return arr;
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
var after = "nam";
var repWord = new RegExp(after,"gi");
console.log(repWord);
