// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
    // this.head = new Node(data, this.head);
  }

  size() {
    let currentNode = this.head;
    let size = 0;
    while (currentNode) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }

  getFirst() {
    return this.getAt(0);
    // return this.head;
  }

  getLast() {
    return this.getAt(this.size()-1);
    // if(!this.head){
    //   return null;
    // }
    // let currentNode = this.head;
    // while(currentNode){
    //   if (!currentNode.next) {
    //     return currentNode;
    //   }
    //   currentNode = currentNode.next;
    // }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    return this.removeAt(0);
    // if(!this.head){
    //   return null;
    // }
    // this.head = this.head.next;
  }

  removeLast() {
    this.removeAt(this.size()-1);
    // if(!this.head){
    //   return null;
    // }
    // let currentNode = this.head;
    // let prevNode = null;
    // while(currentNode.next){
    //   prevNode = currentNode;
    //   currentNode = currentNode.next;
    // }
    // prevNode ? prevNode.next = null : this.head = null;
  }

  insertLast(data) {
    this.getLast() ? this.getLast().next = new Node(data) : this.head = new Node(data);
  }

  getAt (index) {
    if (this.size() <= index) {
      return null;
    }
    let counter = 0;
    let currentNode = this.head;
    while(currentNode){
      if (index === counter){
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }
  }

  removeAt(index) {
    if (this.size() <= index || !this.head) {
      return null;
    }
    if (index === 0){
      this.head = this.head.next;
      return
    }
    const previous = this.getAt(index-1);
    previous.next = previous.next.next;
   
  }

  insertAt(data, index){
    if(index === 0){
      this.head = new Node(data, this.head);
      return;
    }
    if(this.size() <= index) {
      this.getLast().next = new Node(data);
      return;
    }
    const prevNode = this.getAt(index-1);
    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
  }
}

module.exports = { Node, LinkedList };
