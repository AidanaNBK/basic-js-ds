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

  remove(data) {
    if (!this.has(data)) {
      return false;
    }
    this.rootNode = this.removeNode(data, this.rootNode);
    return true;
  }
  removeNode(data, nodeElement) {
    let parent = nodeElement;
    let current = nodeElement;
    while (current) {
      if (current.data === data) {
        break;
      } else if (current.data > data) {
        parent = current;
        current = current.left;
      } else if (current.data < data) {
        parent = current;
        current = current.right;
      } else {
        break;
      }
    }
    console.log("Parent and child: ", parent, current, data);
    if (!current.right && !current.left) {
      console.log(`remove ${data} from leaf`);
      if (current.data > parent.data) {
        parent.right = null;
      } else {
        parent.left = null;
      }
      current = null;
      return nodeElement;
    }
    // if there is no left child will be error
    if (current.left) {
      let maxEl = this.maxFind(current.left)
      console.log("max element of left child: ", maxEl);
      const valueMax = maxEl.data;
      parent = this.removeNode(valueMax, parent);
      current.data = valueMax;
      return nodeElement;
    } else {
      let minEl = this.minFind(current.right)
      console.log("max element of left child: ", minEl);
      const valueMin = minEl.data;
      parent = this.removeNode(valueMin, parent);
      current.data = valueMin;
      return nodeElement;
    }
  }
  
  minFind(node) {
    while (node) {
      if (!node.left) {
        break;
      }
      node = node.left;
    }
    return node;
  }
  maxFind(node) {
    while (node) {
      if (!node.right) {
        break;
      }
      node = node.right;
    }
    return node;
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