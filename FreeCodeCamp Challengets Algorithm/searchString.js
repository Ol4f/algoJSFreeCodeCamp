var testString = "Ada Lovelace and Charles Babbage designed The first computer and the software that would have run on it.";

// Example
var expressionToGetSoftware = /th/g;
var softwareCount = testString.match(expressionToGetSoftware).length;
console.log(softwareCount);
