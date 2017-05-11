var HTMLentities = {
  "\&": "\&amp;",
  "\>": "\&gt;",
  "\<": "\&lt;",
  "\"": "\&quot;",
  "\'":"\&apos;"
};
function convertHTML(str) {
  // &colon;&rpar;
  var check;
  var entities = [];
  for (var prop in HTMLentities){
    check = new RegExp("\\" + prop,"gi");
    if (check.test(str)) {
      entities.push(prop);
    }
  }
  for (var i = 0; i < entities.length; i ++){
    check = new RegExp (entities[i],"gi");
    str = str.replace(check,HTMLentities[entities[i]]);
  }
  return str;
}

console.log(convertHTML("Hamburgers < Pizza > Tacos"));
