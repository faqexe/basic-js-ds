const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.end = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (this.head) {
      this.end.next = node;
      this.end = node;
    } else {
      this.head = node;
      this.end = node;
    }

    this.length++;
  }

  dequeue() {
    if (this.head) {
      const currentVal = this.head;
      this.head = this.head.next;
      this.length--;
      return currentVal.value;
    } else {
      return undefined;
    }
  }
}

module.exports = {
  Queue,
};
