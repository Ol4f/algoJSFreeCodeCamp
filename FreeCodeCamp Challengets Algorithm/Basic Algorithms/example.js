/*var temp = 0;
var arr = [];
for (var i = 0;i < temp;i++){
  arr.push('a');
}
var num = 1009;
console.log(parseInt(num/1000));

console.log(parseInt((num%1000)/100));
console.log(parseInt((num%100)/10));
console.log(num%10);
console.log(arr);
*/
/*var dict = [
  {
    firstname:"Nam",
    lastname:"Nguyen",
  },
  {
    firstname:"An",
    lastname:"Nguyen",

  }
]
var char = "Nam";
var char2 = "ngoc";
console.log(char[0]);
if (/^[A-Z]/.test(char)) {
  console.log(true);
  let temp;
  temp = char2.split("");
  temp[0] = temp[0].toUpperCase();
  char2 = temp.join("");
}
console.log(char2);
console.log(dict[1][0]);

var unique = [];
var arr =[0, 1, 1, 2, 3];
arr.forEach((val1,index)=>{
  unique.forEach((val2,index)=>{
    if (val1!==val2) {
      unique.push(val1);
    }
  });
});

console.log(unique);
*/
s = "NguyenDinh Hai Nam"
s = s.replace(/([A-Z])/g, ' $1').trim()
console.log(s);
var string = "    This    should  become   something          else   too . ";
s = s.replace(/\s+/g, " ");
console.log(s);


var a = 4
function fc(int) {
  return int < 3;
}
var num = [3,"dfdfe",344];
var char = "adfdf33";
var checkResult = typeof num;
console.log(checkResult);
console.log(typeof checkResult);
console.log(num.join(""));
console.log(num);
