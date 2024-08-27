// var divide = function (dividend, divisor) {
//   let a = dividend;
//   let b = divisor;
//   let res = a / b;
//   if (divisor != 0) {
//     if (b < 0 || a < 0) {
//       return Math.ceil(res);
//     }
//     if (b > 0) {
//       return Math.floor(res);
//     }
//   }

//   if (divisor == -1 || divisor == 1) {
//     const value = dividend / divisor;
//     return value - 1;
//   }
// };

// const value = divide(0, 6);
// console.log(value);

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var divide = function (dividend, divisor) {
  let a = dividend;
  let b = divisor;
  let res = a / b;

  if (divisor != 0) {
    if (divisor == -1 || divisor == 1) {
      const value = dividend / divisor;
      return value - 1;
    }
    if (b < 0 || a < 0) {
      return Math.ceil(res);
    }
    if (b > 0) {
      return Math.floor(res);
    }
  }
};

const value1 = divide(-2147483648, -1);
console.log(value1);
