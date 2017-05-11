console.log("a".charCodeAt(0));
var cha = "A";
console.log(String.fromCharCode("A".charCodeAt() + 3));

function rot13(str) { // LBH QVQ VG!
  var temp = str.split(" ");
  for (var x in temp){
    temp[x] = temp[x].split("")
  }
  x = 0;
  for(x in temp){
    for (var y in temp[x]){
      //console.log(temp[x][y]);
      var n = temp[x][y].charCodeAt();
      if ( n >= "A".charCodeAt() &&  n <= "Z".charCodeAt()) {
        if(n > "Z".charCodeAt() - 13) temp[x][y] = String.fromCharCode(n+13-26);
        else temp[x][y] = String.fromCharCode(n+13);
        //console.log(temp[x][y]);
      }
    }
  }
  x = 0
  for (x in temp){
    temp[x] = temp[x].join("");
  }
  temp = temp.join(" ")
  //console.log(temp);
  return temp;
}
var dict = {"nam":"dep trai", "sodienthoai":0932343, "email":"abc@gmail.com"};
var keys = Object.keys(dict).map(function(key){
  return dict[key];
});
console.log(keys);
// Change the inputs below to test
rot13("SERR CVMMN!");
