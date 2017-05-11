function falsyValue(val) {
  if (val === false || val === null || val === 0 || val === "" || val === undefined || val === NaN)
     return;
  else return val;
    }
function bouncer(arr) {
  arr = arr.filter(falsyValue);
  // Don't show a false ID to this bouncer.
  return arr;
}

bouncer([7, "ate", "", false, 9]);
