/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var I = 1;
  var II = 2;
  var III = 3;
  var V = 5;
  var X = 10;
  var L = 50;
  var C = 100;
  var D = 500;
  var M = 1000;
  var num = s.split("");
  const data1 = num.map((item, i) => {
    return item[i];
  });

  return data1;
};

const value = romanToInt("III");
console.log(value);
