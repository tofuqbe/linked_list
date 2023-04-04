class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  tail = null;
  size = 0;

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  atIndex(n) {
    if (n > this.size - 1 || n < 0) return null;
    let i = 1,
      current = this.head;
    while (i <= n) {
      current = current.next;
      i++;
    }
    return current.value;
  }

  pop() {
    if (this.tail != undefined) {
      let current = this.head;
      let next = this.head.next;
      while (next !== this.tail) {
        current = next;
        next = next.next;
      }
      current.next = null;
      this.tail = current;
      this.size--;
    }
  }

  contains(value) {
    let current = this.head;
    while (current !== this.tail) {
      if (current.value === value) return true;
      current = current.next;
    }
    return current.value === value ? true : false;
  }

  find(value) {
    let current = this.head;
    let i = 0;
    while (current.next) {
      if (current.value === value) return i;
      current = current.next;
      i++;
    }
    return current.value === value ? i : null;
  }

  toString() {
    if (!this.head) return "null";
    let string = "";
    let current = this.head;
    while (current.next) {
      string += `( ${current.value} ) -> `;
      current = current.next;
    }
    return (string += `( ${current.value} ) -> ${current.next}`);
  }

  insertAt(value, index) {
    if (index > this.size - 1 || index < 0) return null;
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    } else {
      let i = 0;
      let current = this.head;
      let previous = null;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      newNode.next = current;
      previous.next = newNode;
      this.size++;
    }
  }

  removeAt(index) {
    if (index > this.size - 1 || index < 0) return null;
    if (index === 0) {
      let current = this.head.next;
      this.head = current;
      this.size--;
    } else {
      let i = 0;
      let current = this.head;
      let previous = null;
      let next = null;
      while (i < index) {
        previous = current;
        current = current.next;
        next = current.next;
        i++;
      }
      if ((current = this.tail)) this.tail = previous;
      previous.next = next;
      this.size--;
    }
  }
}

module.exports = LinkedList;
