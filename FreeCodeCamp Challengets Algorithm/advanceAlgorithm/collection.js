
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collectionCopy for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

  if(!collectionCopy.hasOwnProperty(id))
      return collectionCopy;
  if (prop != "tracks" && value.length !== 0) {
    collectionCopy[id][prop] = value;
  }
  if (prop == "tracks" && collectionCopy[id].hasOwnProperty(prop) === false) {
    collectionCopy[id][prop] = [];
    collectionCopy[id][prop].push(value) ;
  }
  if (prop == "tracks" && collectionCopy[id].hasOwnProperty(prop) === true && value.length !== 0) {
    collectionCopy[id][prop].push(value);
  }
  if (value.length === 0 ) {
    delete collectionCopy[id][prop];
  }
  return collectionCopy;
}

// Alter values below to test your code
var result = updateRecords(1245, "tracks", "Addicted to Love");
console.log(result);
