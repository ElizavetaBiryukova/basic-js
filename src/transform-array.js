const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = arr.slice(0);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '--discard-next') {
      newArr.splice(i, 2, 'none', 'none');
    } else if (newArr[i] === '--discard-prev') {
      if (i === 0) {
        newArr.splice(i, 1, 'none');
      } else {
        newArr.splice(i - 1, 2, 'none', 'none');
      }
    } else if (newArr[i] === '--double-next') {
      if (i === newArr.length - 1) {
        newArr.splice(i, 1);
      } else {
        newArr.splice(i, 1, newArr[i + 1]);
      }
    } else if (newArr[i] === '--double-prev') {
      if (i === 0) {
        newArr.splice(i, 1);
      } else {
        newArr.splice(i, 1, newArr[i - 1]);
      }
    }
    // return newArr.filter(el => el !== 'none');
  }
  return newArr.filter(el => el !== 'none');

}

module.exports = {
  transform
};