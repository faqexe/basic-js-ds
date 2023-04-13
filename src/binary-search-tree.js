const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.access = null;
  }

  root() {
    return this.access;
  }

  add(data) {
    this.access = addNode(this.access, data);

    function addNode(node, data) {
      if (!node) return new Node(data);

      if (node.data === node) return node;

      data < node.data
        ? (node.left = addNode(node.left, data))
        : (node.right = addNode(node.right, data));

      return node;
    }
  }

  has(data) {
    return includeNode(this.access, data);

    function includeNode(node, data) {
      if (!node) return false;

      if (node.data === data) return true;

      return data < node.data
        ? includeNode(node.left, data)
        : includeNode(node.right, data);
    }
  }

  find(data) {
    return findNode(this.access, data);

    function findNode(node, data) {
      if (!node) return null;

      if (node.data === data) return node;

      return data < node.data
        ? findNode(node.left, data)
        : findNode(node.right, data);
    }
  }

  remove(data) {
    this.access = deleteNode(this.access, data);

    function deleteNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
      }

      if (!node.left) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let minimumRight = node.right;

      while (minimumRight.left) {
        minimumRight = minimumRight.left;
      }

      node.data = minimumRight.data;

      node.right = deleteNode(node.right, minimumRight.data);

      return node;
    }
  }

  min() {
    if (!this.access) return null;

    let minimumNode = this.access;

    while (minimumNode.left) {
      minimumNode = minimumNode.left;
    }

    return minimumNode.data;
  }

  max() {
    if (!this.access) return null;

    let maximumNode = this.access;

    while (maximumNode.right) {
      maximumNode = maximumNode.right;
    }

    return maximumNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
