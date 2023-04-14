const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

  let arr = String(n).split('').map(el => Number(el));
  let summ = arr.reduce((acc, num) => acc + num, 0);

  if (summ > 9) {
    let summTwo = String(summ).split('').map(el => Number(el)).reduce((acc, num) => acc + num, 0);
    console.log(summTwo);
    return summTwo;
  }
  return summ
}




module.exports = {
  getSumOfDigits
};