const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = 1) {
    this.direct = direct;
  }

  encrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let res = '';
    const alpha = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    text = text.toUpperCase();
    key = key.toUpperCase();

    let j = 0;
    for (let i = 0; i < text.length; i++) {

      if (alpha.includes(text[i])) {
        res = res + alpha[(alpha.indexOf(text[i]) + alpha.indexOf(key[j % key.length])) % alpha.length];
        j++;
      } else {
        res = res + text[i];
      }
    }
    return this.direct ? res : res.split('').reverse().join('');
  }

  decrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const alpha = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    key = Array.from(key.toUpperCase()).map((el) => alpha[(alpha.length - alpha.indexOf(el)) % alpha.length]).join('');
    return this.encrypt(text, key);
  }
}

module.exports = {
  VigenereCipheringMachine
};