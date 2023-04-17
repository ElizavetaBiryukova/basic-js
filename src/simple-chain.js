const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || !Number.isInteger(position) || position > this.getLength()) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    };
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let res = this.array.join('~~');
    this.array = [];
    return res
  }
};

module.exports = {
  chainMaker
};