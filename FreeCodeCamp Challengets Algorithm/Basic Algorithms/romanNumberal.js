
var romanNumerals = {
  1:"I",2:"II",3:"III",4:"IV",5:"V",6:"VI",7:"VII",8:"VIII",9:"IX",10:"X",
  20:"XX",30:"XXX",40:"XL",50:"L",60:"LX",70:"LX",80:"LXXX",90:"XC",100:"C",
  200:"CC",300:"CCC",400:"CD",500:"D",600:"DC",700:"DCC",800:"DCCC",900:"CM",1000:"M",first: "Romeo"
};

function convertToRoman(num) {
  var temp = [];
  var thousand = parseInt(num/1000);
  var hundreds = parseInt((num%1000)/100);
  var tens = parseInt((num%100)/10);
  var units = num%10;
  for (var i = 0; i < parseInt(num/1000); i ++){
    temp.push(romanNumerals[1000]);
  }
  if (hundreds != 0) {
    temp.push(romanNumerals[hundreds*100]);
  }
  if (tens != 0) {
    temp.push(romanNumerals[tens*10]);
  }
  if (units != 0) {
    temp.push(romanNumerals[units])
  }
  return temp.join("");
}
//var arr = Object.keys(romanNumerals);
var arr = [];
arr.push(romanNumerals)
var checker = {
  first: "Romeo"
}
var flag = 0;
for (var x = 0; x < 5;x ++){
  flag ++;
}
console.log(flag);
var temp = Object.keys(checker);
console.log(romanNumerals[temp]);
console.log(convertToRoman(3689));
var after = "nam";
var m;
var repWord = new RegExp("^" + after,"gi");
console.log(repWord);
