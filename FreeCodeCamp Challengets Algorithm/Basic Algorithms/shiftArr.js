
function dropElements(arr, func) {
  // Drop them elements
  var temp = [];
  arr.forEach((val,index)=>{
    if (func(val)) {
      temp.push(index);
    }
  });

  if(temp.length > 0) return arr.slice(temp[0]);
  else return temp;

}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
