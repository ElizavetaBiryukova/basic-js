const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = [];
  let j = 1;

  for (let i = 0; i < str.length; i++) {

    if (str[i] == str[i + 1]) {
      j++;
    } else {
      (j == 1) ? res.push(str[i]) : res.push(j, str[i]);
      j = 1;
    }
  }
  return res.join('');
}

module.exports = {
  encodeLine
};