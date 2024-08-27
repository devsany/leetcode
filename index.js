var isPalindrome = function (x) {
  let myValue = String(x)
    .split("")
    .map((x) => {
      return Number(x);
    });
  let reverse = String(x)
    .split("")
    .map((x) => {
      return Number(x);
    })
    .reverse();

  //   for (let i = 0; i <= myValue.length; i++) {
  //     if (reverse[i] === myValue[i]) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
};

const Palindrome = isPalindrome(1000021);
console.log(Palindrome);
const num1 = Number(myValue.join(""));
const num2 = Number(reverse.join(""));
if (num1 !== num2) {
  return false;
} else {
  return true;
}
