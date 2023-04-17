const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const a = String(n).split('');
  let b = 0;
  for (let i = 0; i < a.length; i++) {
    const num = String(n).replace(a[i], '');
    if (num > b) {
      b = num;
    }
  }
  return Number(b);
}


module.exports = {
  deleteDigit
};