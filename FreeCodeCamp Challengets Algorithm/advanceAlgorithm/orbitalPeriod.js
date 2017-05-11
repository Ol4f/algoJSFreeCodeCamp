
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 0;
  for (var i = 0; i < arr.length ; i++){
    a = arr[i].avgAlt + earthRadius;
    var Period = 2*Math.PI*Math.sqrt(Math.pow(a,3)/(GM));
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = Math.round(Period);
  }
  return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
