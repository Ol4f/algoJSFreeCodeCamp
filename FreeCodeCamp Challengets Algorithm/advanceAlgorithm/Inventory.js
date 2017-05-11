function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!-x
    var dict1 = {};
    var dict2 = {};
    dict1 = arrayToObject(arr1);
    console.log(dict1);
    dict2 = arrayToObject(arr2);
    var key2 = Object.keys(dict2);
    key2 = key2.sort();
    console.log(key2);
    for (var i = 0; i < key2.length; i++) {
      if (dict1.hasOwnProperty(key2[i])) {
        dict1[key2[i]] = dict1[key2[i]]+dict2[key2[i]];
      }
      else dict1[key2[i]] = dict2[key2[i]];
    }
    console.log(dict1);
    var arrResult = [];
    arrResult = objectToArray(dict1);
    console.log(arrResult);
    return arrResult;

}
function arrayToObject(arr){
  var object = {};
  for (var i = 0; i < arr.length; i++) {
    object[arr[i][1]] = arr[i][0];
  }
  return object;
}
function objectToArray(object) {
    var key = Object.keys(object);
    key = key.sort();
    var arr = [];
    for(var i = 0; i < key.length ; i++){
      arr.push([object[key[i]],key[i]]);
    }
    return arr;
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
