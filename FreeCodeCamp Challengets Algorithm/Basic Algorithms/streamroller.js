function pushtoArray(storage,checkElement){
  if(Array.isArray(checkElement)){
    for(var i = 0;i < checkElement.length;i++){
      pushtoArray(storage,checkElement[i]);
    }
  }
  else storage.push(checkElement);
  return storage;
}

var arr = [3,4,5,[45,[4]]];
var storage = [];
console.log(pushtoArray(storage,arr));
