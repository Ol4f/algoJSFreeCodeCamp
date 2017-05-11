
var denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var register = cid.reduce((acc,cur)=>{
    acc.total += cur[1];
    acc[cur[0]] = cur[1];
    return acc;
  },{total:0});

  if (register.total < change) {
    return("Insufficient Funds");
  }
  if (register.total === change) {
    return("Closed");
  }

  var change_arr = denom.reduce((acc,cur)=>{
    var value = 0;
    while (register[cur.name] > 0 && change >= cur.val) {
      change -= cur.val;
      register[cur.name] -= cur.val;
      value += cur.val;
      //value = parseFloat(value).toFixed(2);
      change = Math.round(change*100)/100;
    }
    if (value > 0) {
        acc.push([cur.name,value]);
    }

    return acc;
  },[]);

  if (change_arr.length < 1 || change > 0 ) {
    return("Insufficient Funds");
  }
  return change_arr;

}

// test here
console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
