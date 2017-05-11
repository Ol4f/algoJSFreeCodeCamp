function truncateString(str, num) {
  // Clear out that junk in your trunk
  var temp;
  console.log(str.length + " " + num);
  if (num <= 3 ){
   temp = str.slice(0,str.length - num -1);
    console.log(temp + "...");
  }
  else {
    temp = str.slice(0,str.length - num  -1);
    temp = temp.concat("...");
    console.log(temp);
  }
}
function truncateString1(str, num) {
  // Clear out that junk in your trunk
  var strTemp = str;
  var temp;

  if (num < str.length){
    if (num < 3){
      temp = str.slice(0,num);
      return temp + "...";
    }
    else {
      temp = str.slice(0,num - 3);
      temp = temp.concat("...");
      return temp;
    }
  }
  if(num  >= str.length || str.length <= num){
    temp = strTemp;
    return temp;
  }
}
//truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString1("A-", 2);
console.log(truncateString1("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)
);
