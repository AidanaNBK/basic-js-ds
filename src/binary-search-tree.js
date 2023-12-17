const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }
  
  root() {
    return this.rootNode;
  }

  add(data) {
    const elem = new Node(data);
    if (!this.rootNode){
      this.rootNode = elem;
      return this;
    }
    let current = this.rootNode;
    while (current){
      if (data > current.data) {
        if (!current.right){
          current.right = elem;
          break;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = elem;
          break;
        }
        current = current.left;
      }
    }
    return this;
  }

  has(data) {
    if (!this.rootNode){
      return false;
    }
    let current = this.rootNode;
    while (current){
      if (current.data === data){
        return true;
      }
      if (data > current.data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }

  find(data) {
    if (!this.rootNode){
      return null;
    }
    let current = this.rootNode;
    while (current){
      if (current.data === data){
        return current;
      }
      if (data > current.data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootNode){
      return null;
    }
    let current = this.rootNode;
    while (current){
      if (!current.left){
        break;
      }
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.rootNode){
      return null;
    }
    let current = this.rootNode;
    while (current){
      if (!current.right){
        break;
      }
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};