const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let newHead = null;
  let iter = null;
  let temp = l;
  while (temp !== null){
    if (temp === null){
      return newHead;
    }
    if (temp.value !== k){
      const elem = new ListNode(temp.value);
      if (newHead === null){
        newHead = elem;
        iter = newHead;
      } else {
        iter.next = elem;
        iter = iter.next;
      }
    }
    temp = temp.next;
  }
  return newHead;
}

module.exports = {
  removeKFromList
};
