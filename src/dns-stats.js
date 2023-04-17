const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  for (let domain of domains) {
    let array = domain.split('.').reverse();

    for (let i = 0; i < array.length; i++) {
      let st = '.' + array.slice(0, i + 1).join('.');
      res[st] = res[st] ? res[st] + 1 : 1;
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
