var Bike = function() {

  // Only change code below this line.
  var gear = 0;
  this.getGear = function(input) {
    gear = input;
    return gear;
  };
  this.setGear = function(input) {
    if (input >=  0){
      gear = input;
      return gear;
    }
    else return gear;
  };

};
  function tinhGiaithua(num) {
    if (num < 0) {
      return;
    }
    if (num === 0 || num == 1) {
      return 1;
    }
    if (num > 1) {
      return num * tinhGiaithua(num - 1);
    }
  }
var myBike = new Bike();
console.log(myBike.getGear(1));
console.log(tinhGiaithua(5));

function reverseString(str) {
  var temp;
  temp = str.split("");
  temp.reverse();
  str = temp.join("");
  return str;
}

var str = "Name";
console.log(reverseString(str));
console.log(str);
//console.log(temp);

function palindrome(str) {
  // Good luck!
  var temp;
  str = str.replace(/\s+/g,'');
  str = str.replace(/[$-/:-?{-~!"^_`\[\]]+/g,'');
  str = str.toLowerCase();
  console.log(str);
  temp = reverseString(str);
  console.log(temp);
  if (temp === str)
    return true;
  else return false;
}
console.log(palindrome("_eye"));

function findLongestWord(str) {
  var temp;
  var max = 0;
  var i = -1;
  temp = str.split(" ");
  while (i < temp.length-1){
    if (max < temp[i+1].length)
      max = temp[i+1].length;
    i = i + 1;
  }
  console.log(max);
}
findLongestWord("dsfeafddddfafsdf df dafewwqrdfdddddddddddddddddd");


function titleCase(str) {
  var temp;
  temp = str.split(" ");
  var arr = [];
//  arr.push(temp[0].split(""));
  for (var i = 0;i < temp.length; i ++){
    arr[i]=temp[i].split("");
  }
  for (i = 0;i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j ++){
      arr[i][j] = arr[i][j].toLowerCase();
      console.log(arr[i][j]);
    }
    arr[i][0] = arr[i][0].toUpperCase();
    arr[i] = arr[i].join("");
  }
  temp = arr.join(" ");
  return temp;
}

titleCase("dMdc adfdfe dafe");
