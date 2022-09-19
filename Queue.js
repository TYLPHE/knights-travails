function Queue() {
  return {
    items: [],

    // Add element to queue
    enqueue(element) {
      this.items.push(element)
    },

    // Remove element from queue
    dequeue() {
      if (this.isEmpty()) {
        return 'Underflow';
      }
      return this.items.shift();
    },

    // Returns the front element of the queue
    front() {
      if (this.isEmpty()) {
        return 'No elements in Queue';
      }
      return this.items[0];
    },

    // Returns true if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    },

    // Returns all the elements of a queue
    printQueue() {
      let str = '';
      for (let i =0; i < this.items.length; i += 1) {
        str += this.items[i] + ' ';
        return str;
      }
    }
  }
}

export default Queue;
